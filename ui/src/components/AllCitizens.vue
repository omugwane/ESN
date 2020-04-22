<template>
    <div class="citizens-list-wrapper">
        <h4 class="display-4">ESN citizens directory</h4>
        <div class="wrapper">
            <ul class="list-group" v-if="citizens.length > 0">
                <li class="list-group-item"
                    v-for="citizen in filterCitizens" :key="citizen.username">
                    <div>
                        <div class="citizen-names">
                            {{citizen.username}} <span v-if="citizen.firstName.trim()!==''">({{citizen.firstName+ ', '+citizen.lastName}})</span>

                            <small class="citizen-status" :style="{color: getStatusColor(citizen.status)}">
                                (status: {{
                                (citizen.status.toUpperCase() === 'UNDEFINED') ?
                                "Not available":`${citizen.status.toUpperCase()}`
                                }})
                            </small>
                        </div>
                        <div class="citizen-details">
                            <small><span class="mdi mdi-email"/> {{citizen.email}}</small> <small><span
                                class="mdi mdi-phone"/>
                            {{citizen.phone}}</small>
                        </div>
                    </div>

                    <button type="button" id="btn-update-user" title="Click to update"
                            @click="getUserProfileInfo(citizen.username)"
                            v-if="loggedInUserRole === 'Administrator'">
                        <span class="mdi mdi-account-edit mdi-24px"/>
                    </button>
                </li>
            </ul>
            <div class="text-center" v-else>
                <small>No citizens available yet</small>
            </div>
        </div>

        <sweet-modal ref="modal"
                     id="modal-player"
                     enable-mobile-fullscreen
                     overlay-theme="dark"
                     blocking>
            <template slot="title">
                <h5 class="modal-title">Update User Profile Information</h5>
            </template>

            <form>
                <div class="form-group">
                    <label for="username">Username</label>
                    <input ref="username" type="text" v-model="selectedUser.username" placeholder="Enter username"
                           class="form-control"
                           id="username">
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="password">Password</label>
                        <input type="password" v-model="selectedUser.password" placeholder="Enter password"
                               class="form-control" id="password">
                    </div>
                    <div class="form-group col-md-6">
                        <label for="re-password"></label>
                        <input type="password" v-model="selectedUser.verifyPassword" placeholder="Re-enter password"
                               class="form-control mt-2" id="re-password">
                    </div>
                </div>
                <div class="form-group">
                    <div>Privilege</div>

                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="privilege"
                               v-model="selectedUser.role" id="citizen" value="Citizen">
                        <label class="form-check-label" for="citizen">Citizen</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="privilege" v-model="selectedUser.role"
                               id="coordinator" value="Coordinator">
                        <label class="form-check-label" for="coordinator">Coordinator</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="privilege" v-model="selectedUser.role"
                               id="admin" value="Administrator">
                        <label class="form-check-label" for="admin">Administrator</label>
                    </div>
                </div>
                <div class="form-group">
                    <div>Activate/Deactivate</div>

                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="activation"
                               v-model="selectedUser.active" id="active" value="true">
                        <label class="form-check-label" for="active">Active</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="activation"
                               v-model="selectedUser.active" id="inactive" value="false">
                        <label class="form-check-label" for="inactive">Inactive</label>
                    </div>
                </div>

                <div class="alert alert-danger mt-2" role="alert" v-show="errors.length !== 0">
                    <span class="d-block" v-for="(error,index) in errors" :key="index"> &bigstar; {{error}} </span>
                </div>
            </form>

            <template slot="button">
                <button type="button" class="btn btn-secondary mr-3" @click="closeModal">Close</button>
                <button type="button" class="btn btn-primary" @click="updateProfile">
                    Update <span class="mdi mdi-send"/>
                </button>
            </template>
        </sweet-modal>

    </div>
</template>

<script>
    import {GET_ALL_USERS, GET_USER, UPDATE_USER} from '../helpers/api'
    import {STATUSES} from "../helpers/statuses";
    import {SweetModal} from "sweet-modal-vue";
    import {eventBus} from "../main";

    export default {
        name: "AllCitizens",
        components: {SweetModal},
        created() {
            this.getAllCitizens();

            eventBus.$on('updateUserProfile', (data) => {
                this.citizens.forEach((citizen) => {
                    if (citizen._id === data.user._id)
                        citizen.username = data.user.username;
                    citizen.active = data.user.active;
                    citizen.role = data.user.role;
                });
            });

            let user = this.$cookies.get("user");
            this.loggedInUserRole = user.role;
        },
        data() {
            return {
                citizens: [],
                selectedUser: {
                    username: '',
                    password: '',
                    verifyPassword: '',
                    role: 'Citizen',
                    active: true
                },
                errors: [],
                oldUsername: '',
                loggedInUserRole: '',
            }
        },
        computed: {
            filterCitizens() {
                if (this.loggedInUserRole !== 'Administrator') {
                    return this.citizens.filter((citizen) => {
                        return citizen.active === true;
                    })
                } else
                    return this.citizens;
            }
        },
        methods: {
            getUserProfileInfo(username) {
                //http request
                let vm = this;
                vm.oldUsername = username;
                vm.$http.get(GET_USER + username).then(({data}) => {
                    vm.selectedUser.username = data.data.username;
                    vm.selectedUser.role = data.data.role;
                    vm.selectedUser.active = data.data.active;

                    vm.$refs.username.focus(); //Setting focus to the field for username
                }).catch((err) => {
                    console.log(err);
                });

                this.$refs.modal.open();

                // setTimeout((),1000);
            },
            closeModal() {
                this.$refs.modal.close();

                this.selectedUser = {
                    username: '',
                    password: '',
                    verifyPassword: '',
                    role: 'Citizen',
                    active: true
                };
                this.errors = [];
            },

            updateProfile() {
                let vm = this;
                vm.errors = [];
                // this.errors.splice(0, this.errors.length); //Clearing all errors

                let errors = this.validateData(this.selectedUser);

                if (errors.length === 0) {
                    vm.selectedUser.active = (vm.selectedUser.active === 'true' || vm.selectedUser.active === true);

                    vm.errors = [];
                    vm.$http.put(UPDATE_USER + vm.oldUsername, vm.selectedUser).then((response) => {
                        console.log(response);

                        vm.closeModal();
                        vm.$swal({
                            text: "Profile was successfully updated",
                            icon: 'success',
                            toast: false,
                            showConfirmButton: true,
                        });
                    }).catch((err) => {
                        if (err.response)
                            vm.errors.push(err.response.data.message);
                        else
                            vm.errors.push("Error occurred! Update failed.");
                        console.log(err);
                    })

                } else {
                    this.errors = errors;
                }
            },
            validateData({username, password, verifyPassword}) {
                let errors = [];
                if (username.trim().length < 2)
                    errors.push("Username is too short. At least 3 characters are allowed!");
                else if (password.length !== 0 && password.trim().length < 6)
                    errors.push("Short passwords are insecure! Minimum characters allowed are 6.");
                else if (password !== verifyPassword)
                    errors.push("Passwords do not match! Please try again.");
                else if (password !== verifyPassword)
                    errors.push("Passwords do not match! Please try again.");

                return errors;

            },
            getStatusColor(status) {
                return STATUSES[status.toUpperCase()].colorCode
            },
            getAllCitizens() {
                let vm = this;
                vm.$http.get(GET_ALL_USERS).then(({data}) => {
                    vm.citizens = data.data
                }).catch((err) => {
                    alert(err)
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../assets/sizes";
    @import "../assets/colors";

    .citizens-list-wrapper {
        margin: 16px;

        @media (min-width: 601px) {
            margin: 16px 20%;
        }
        @media (max-width: 600px) {
            margin: 8px 16px;
        }

        .wrapper {
            overflow-y: auto;
            max-height: calc(100vh - #{$header-height} - 112px);

            .list-group-item {
                padding: 4px 8px !important;
            }

            #btn-update-user {
                background-color: $primary;
                border-style: solid;
                border-color: transparent;
                height: 40px;
                width: 40px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                outline: none;

                &:hover {
                    background-color: $secondary-1;
                }
            }
        }

        .list-group-item {
            display: flex;
            align-items: center;
            flex-flow: wrap;
            justify-content: space-between;
            @media (max-width: 600px) {
                display: block;
            }
        }

        .display-4 {
            font-size: 3rem;
            font-weight: 300;
            line-height: 1.2;
            margin-bottom: 16px;
            @media (max-width: 600px) {
                margin: 8px;
                font-size: 1.5rem;
            }
        }

        .citizen-names {
            font-size: 1.3em;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
            text-transform: capitalize;

            span {
                font-size: 0.8em;
                font-style: italic;
            }

            @media (max-width: 600px) {
                font-size: 12px;
                span {
                    /*display: none;*/
                }
            }
        }

        .citizen-details {
            @media (max-width: 600px) {
                display: none;
                margin-left: 0px;
                small {
                    display: block !important;
                }
            }
            @media (min-width: 600px) {
                margin-left: 16px;
            }
        }

        .citizen-status {
            margin-left: 8px;
            font-size: 12px;
        }
    }
</style>