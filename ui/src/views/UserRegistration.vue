<template>
    <div class="page-wrapper">
        <div class="card mt-md-5 login-card">
            <div class="card-body">
                <h1 class="display-5 text-center page-title">ESN Registration</h1>

                <form class="mt-sm-5">
                    <div class="form-group">
                        <label for="username">Username</label>
                        <input type="text" v-model="username" placeholder="Enter username"
                               class="form-control"
                               id="username">
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" v-model="password" placeholder="Enter password"
                               class="form-control" id="password">
                    </div>

                    <a href="" v-b-toggle.collapse-1 @click.prevent="collapseShown=!collapseShown">
                        <span class="mdi" :class="collapseShown? 'mdi-minus':'mdi-plus'"/> Additional
                        details (optional)</a>
                    <b-collapse id="collapse-1" class="mt-2">
                        <b-card>
                            <div class="form-group">
                                <!--                                <label for="username">Username</label>-->
                                <input type="text" v-model="firstName" placeholder="Enter First name"
                                       class="form-control">
                            </div>
                            <div class="form-group">
                                <!--                                <label for="password">Password</label>-->
                                <input type="password" v-model="lastName" placeholder="Enter Last name"
                                       class="form-control">
                            </div>

                            <div class="form-group">
                                <input type="password" v-model="email" placeholder="Enter Email"
                                       class="form-control">
                            </div>

                            <div class="form-group">
                                <input type="password" v-model="phone" placeholder="Phone" class="form-control">
                            </div>
                        </b-card>
                    </b-collapse>

                    <button @click="register" type="button" class="btn btn-primary btn-block my-2">Register</button>

                    <small class="d-block">
                        Already registered? click
                        <router-link :to="{name: 'login'}"><a href="">here</a></router-link>
                        to login
                    </small>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import {BCollapse} from 'bootstrap-vue'

    export default {
        name: "UserRegistration",
        components: {BCollapse},
        data() {
            return {
                username: '',
                password: '',
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                collapseShown: false,
            }
        },
        methods: {
            register() {

            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "src/assets/colors";

    .page-title {
        color: $secondary;
    }

    .page-wrapper {
        display: flex;
        justify-content: center;
        padding: 8px 16px;
    }

    .login-card {
        width: 400px;
    }
</style>