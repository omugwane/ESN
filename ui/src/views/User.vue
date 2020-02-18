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

                    <button type="submit" class="btn btn-primary btn-block">Log in</button>
                    <small class="d-block">
                        Not already registered? click <a href="">here</a> to register
                    </small>
                </form>
            </div>
        </div>
    </div>
</template>