<template>
    <div class="content px-md-5">
        <h3 class="display-4">Share Status</h3>
        <div class="mb-2">
        </div>
        <form action="">
            <div class="row title text-black-50 mb-1">
                <div class="col-md-1 offset-md-1"></div>
                <div class="col-md-2">Name</div>
                <div class="col-md-6">Description</div>
            </div>
            <div :style="{color: getStatusColor(status.name)}" v-for="(status, index) in statuses"
                 class="row mb-1 font-weight-bold" v-bind:key="index">
                <div class="col-md-1 offset-md-1">
                    <input v-model="selectedStatus" name="status" type="radio" v-bind:value="status.name">
                </div>
                <div class="col-md-2">{{status.name}}</div>
                <div class="col-md-6">{{status.description}}</div>
            </div>
            <button id="btn-share-status" @click="shareStatus" class="mt-3" type="button">Share status</button>
        </form>
    </div>
</template>

<script>
    import * as api from "../helpers/api";
    import {STATUSES} from "../helpers/statuses";

    export default {
        name: "ShareStatus",
        created() {
            let user = this.$cookies.get('user')
            this.loggedInUsername = user.username;
        },
        data() {
            return {
                loggedInUsername: '',
                statuses: [
                    {
                        name: 'OK',
                        description: 'I am OK, I do not need help',
                        colorCode: 'Green',
                        icon: 'Icon'
                    },
                    {
                        name: 'Help',
                        description: 'I need help, but this is not a life threatening emergency',
                        colorCode: 'Yellow',
                        icon: 'Icon'
                    },
                    {
                        name: 'Emergency',
                        description: 'I need help now, as this is a life threatening emergency!',
                        colorCode: 'Red',
                        icon: 'Icon'
                    },
                    {
                        name: 'Undefined',
                        description: 'The user has not been providing her status yet.',
                        colorCode: '',
                        icon: ''
                    }
                ],
                selectedStatus: '',
                currentStatus: 'undefined',
            }
        },
        methods: {
            getStatusColor(status) {
                return STATUSES[status.toUpperCase()].colorCode
            },
            shareStatus() {
                let vm = this;
                vm.$http.put(api.UPDATE_USER_STATUS + vm.loggedInUsername, {status: vm.selectedStatus}).then((response) => {
                    console.log(response)
                    alert('Successfully shared!')
                }).catch((err) => {
                    alert(err)
                })
            },

        }
    }
</script>

<style lang="scss" scoped>
    #btn-share-status {
        margin-left: 96px;

        @media (max-width: 600px) {
            margin-left: 0;
        }
    }
</style>