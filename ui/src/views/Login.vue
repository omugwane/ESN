<template>
    <div class="page-wrapper">
        <div class="card mt-md-5 login-card">
            <div class="card-body">
                <h1 class="display-5 text-center page-title">ESN Login</h1>

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

                    <button @click="login" type="button" class="btn btn-primary btn-block my-2">Log in</button>

                    <small class="d-block">
                        Not already registered? click
                        <router-link :to="{name: 'register'}"><a href="">here</a></router-link>
                        to register
                    </small>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                username: '',
                password: ''
            }
        },
        methods: {
            login() {
                this.$router.push({name: 'chat'})
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