<template>
    <div class="page-wrapper">
        <div class="header">
            Logged in: <span>{{loggedInUsername.toUpperCase()}}</span>
        </div>
        <div class="body">
            <div id="side-bar">
                <div class="page-title">
                    <h4 class="display-5 text-center">ESN</h4>
                </div>
                <div class="side-menu">

                    <div class="menu-item">
                        <router-link :to="{name: 'private-chat'}">
                            <a>Private Chat</a>
                        </router-link>
                    </div>

                    <div class="menu-item">
                        <router-link :to="{name: 'chat'}">
                            <a>Public Chat</a>
                        </router-link>
                    </div>
                    <div class="menu-item">
                        <router-link :to="{name: 'all-citizens'}">
                            <a>All Citizens</a>
                        </router-link>
                    </div>
                </div>
                <div class="side-footer">
                    <button type="button" @click="logout">Sign out</button>
                </div>
            </div>
            <div id="content">
                <router-view/>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MainContainer",
        created() {
            let user = this.$cookies.get('user')
            this.loggedInUsername = user.username;
        },
        data() {
            return {
                loggedInUsername: '',
            }
        },
        methods: {
            logout() {
                if (window.$cookies.isKey('user')) {
                    window.$cookies.remove('user');
                    this.$router.push({name: 'login'});
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

    /*xs: < 600px*/
    /*sm: 600px > < 960px*/
    /*md: 960px > < 1264px* */
    /*lg: 1264px* > < 1904px* */
    /*xl: > 1904px* */
    @import "src/assets/colors";
    @import "src/assets/sizes";

    .page-wrapper {
        position: relative;
    }

    .page-title {
        color: $primary;
    }

    .header {
        border-bottom: 1px solid $secondary;
        height: $header-height;
        /*background-color: #E6E6E6;*/
        display: flex;
        padding: 8px 24px;
        justify-content: flex-end;
        align-items: center;

        span {
            margin-left: 16px;
            font-weight: bold;
            font-size: 1.5em;
        }
    }

    #side-bar {
        color: $primary;
        background-color: $secondary;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        width: $side-width;
        display: flex;
        flex-direction: column;

        .page-title {
            height: $header-height;
            display: flex;
            justify-content: center;
            align-items: center;
            border-bottom: 1px solid $primary;
        }

        .side-menu {
            flex-grow: 1;

            .menu-item {
                text-align: center;
                margin-top: 8px;

                a {
                    color: $primary;
                }
            }
        }

        .side-footer {
            margin-bottom: 8px;
            padding: 8px 16px;
            text-align: center;
        }
    }

    #content {
        margin-left: $side-width;
        margin-right: 20px;
    }


</style>