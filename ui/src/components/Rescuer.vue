<template>
    <div class="content px-md-5">
        <h3 class="display-5">Be A Rescuer</h3>
        <div class="mb-2">
        </div><br/>
        <form action="">
            <div class="row title text-black-50 mb-1">
                <div class="col-md-1 offset-md-1"></div><br/>
                <div class="col-md-2">Option</div>
                <div class="col-md-6">Description</div>
            </div>
            <div :style="{color: getRescuerColor(rescuer.option)}" v-for="(rescuer, index) in rescuers"
                 class="row mb-1 font-weight-bold" v-bind:key="index">
                <div class="col-md-1 offset-md-1">
                    <input v-model="selected" name="rescuer" type="radio" v-bind:value="rescuer.option">
                </div>
                <div class="col-md-2">{{rescuer.option}}</div>
                <div class="col-md-6">{{rescuer.description}}</div>
            </div><br/>
            <button id="btn-be-rescuer" @click="becomeRescuer" class="mt-3" type="button">Be a rescuer</button>
        </form>
    </div>
</template>

<script>
    import * as api from "../helpers/api";
    import {RESCUERS} from "../helpers/rescuers";

    export default {
        name: "rescue",
        created() {
            let user = this.$cookies.get('user')
            this.loggedInUsername = user.username;
        },
        data() {
            return {
                loggedInUsername: '',
                rescuers: [
                    {
                        option: 'Yes',
                        description: 'Yes, I want to be a rescuer',
                        colorCode: 'Green'
                    },
                    {
                        option: 'No',
                        description: 'I am not interested in becoming a rescuer.',
                        colorCode: ''
                    }
                ],
                selected: '',
            }
        },
        methods: {
            getRescuerColor(rescuer) {
                return RESCUERS[rescuer.toUpperCase()].colorCode
            },
            becomeRescuer() {
                let vm = this;
                vm.$http.put(api.UPDATE_USER_RESCUER + vm.loggedInUsername, {rescuer: vm.selected}).then((response) => {
                    console.log(response)
                    alert('Successfully updated!')
                }).catch((err) => {
                    alert(err)
                })
            },

        }
    }
</script>

<style lang="scss" scoped>
    #btn-be-rescuer {
        margin-left: 96px;

        @media (max-width: 600px) {
            margin-left: 0;
        }
    }
</style>