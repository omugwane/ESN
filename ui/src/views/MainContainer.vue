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
                        <router-link :to="{name: 'search-information'}">
                            <span class="mdi mdi-magnify mdi-18px"/>
                            <span class="menu-item-text"> Search </span>
                        </router-link>
                    </div>
                    <div class="menu-item">
                        <router-link :to="{name: 'private-chat'}">
                            <span class="mdi mdi-chat-outline"/>
                            <span class="mdi mdi-lock-open-outline" style="font-size: 10px"/>
                            <span class="menu-item-text"> Private Chat </span>
                        </router-link>
                    </div>

                    <div class="menu-item">
                        <router-link :to="{name: 'chat'}">
                            <span class="mdi mdi-chat-outline"/> <span class="menu-item-text">Public Chat</span>
                        </router-link>
                    </div>
                    <div class="menu-item">
                        <router-link :to="{name: 'share-status'}">
                            <span class="mdi mdi-share-outline"/> <span class="menu-item-text">Share Status </span>
                        </router-link>
                    </div>
                    <div class="menu-item">
                        <router-link :to="{name: 'post-announcement'}">
                            <span class="mdi mdi-share-outline"/> <span class="menu-item-text">Announcements </span>
                        </router-link>
                    </div>
                    <div class="menu-item">
                        <router-link :to="{name: 'all-citizens'}">
                            <span class="mdi mdi-folder-account-outline"/> <span
                                class="menu-item-text">ESN Directory</span>
                        </router-link>
                    </div>
                </div>
                <div class="side-footer">
                    <button type="button" @click="logout">
                        <span class="btn-label">Sign out</span> <span class="mdi mdi-logout"/>
                    </button>
                </div>
            </div>
            <div id="content">
                <router-view/>
            </div>
        </div>
    </div>
</template>

<script>
    import {eventBus} from '../main'

    export default {
        name: "MainContainer",
        created() {
            let user = this.$cookies.get('user');
            let newRegisteredUsername = this.$cookies.get('newUser');
            this.loggedInUsername = user.username;

            if (user.username === newRegisteredUsername) {
                this.$swal({
                    title: 'Greeting',
                    text: newRegisteredUsername.toUpperCase() + ', welcome to ESN community! Click on this alert to close it.',
                    toast: true,
                    position: 'top',
                    showConfirmButton: false,
                });

                window.$cookies.remove('newUser');
            }
        },
        data() {
            return {
                loggedInUsername: '',
            }
        },
        sockets: {
            connect() {
                // console.log("Connected")
            },

            disconnect() {
                // console.log("Disconnected")
            },
            newPublicChat(chat) {
                this.notifyUser(chat)
                eventBus.$emit('new-chat-message', chat);
            },
            newAnnouncement(announcement) {
                eventBus.$emit('newAnnouncement', announcement);
            }
        },
        methods: {
            logout() {
                if (window.$cookies.isKey('user')) {
                    window.$cookies.remove('user');
                    this.$router.push({name: 'login'});
                }
            },
            notifyUser(chat) {

                let options = {
                    // title: 'Alert',
                    text: ' Received a new public chat message from  ' + chat.sender.toUpperCase(),
                    icon: 'info',
                    toast: true,
                    position: 'top',
                    showConfirmButton: false,
                    // timer: 50000,
                    // timerProgressBar: true,
                    onOpen: (toast) => {
                        toast.addEventListener('mouseenter', this.$swal.stopTimer)
                        toast.addEventListener('mouseleave', this.$swal.resumeTimer)
                    }
                }

                if (this.$route.name !== 'chat' && chat.sender !== this.loggedInUsername && chat.receiver === null) { //Public chat
                    // if (chat.sender !== this.loggedInUsername && chat.receiver === null)
                    this.$swal(options);
                }

                //Filtering out notifications to messages the current logged in user is the receiver
                else if (this.$route.name !== 'private-chat' && chat.sender !== this.loggedInUsername && chat.receiver === this.loggedInUsername) {
                    options.text = 'Received a new private chat message from  ' + chat.sender.toUpperCase()
                    this.$swal(options);
                }

            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '~sweetalert2/src/variables';

    $swal2-background: #990000;

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

                @media(max-width: 600px) {
                    font-size: 14px;
                    padding: 4px;
                    .menu-item-text {
                        display: block;
                    }
                }

                a {
                    color: $primary;
                    text-decoration: none;
                    display: block;
                    border-radius: 8px;
                    margin-left: 56px;
                    margin-right: 56px;
                    padding: 4px 16px;
                    @media screen and (max-width: 960px) and (min-width: 601px) {
                        margin-left: 16px;
                        margin-right: 16px;
                    }

                    @media(max-width: 600px) {
                        margin-left: 2px;
                        margin-right: 2px;
                        padding: 2px 4px;
                    }

                    &.router-link-active,
                    &:hover {
                        background-color: rgba(255, 255, 255, 0.2);
                    }
                }
            }
        }

        .side-footer {
            margin-bottom: 8px;
            padding: 8px 16px;
            text-align: center;

            button {
                border-radius: 8px;
                padding: 4px 8px;
                border: 1px solid $dark-5;
                @media(max-width: 600px) {
                    font-size: 14px;
                }

                .btn-label {
                    @media(max-width: 600px) {
                        display: none;
                    }
                }
            }
        }
    }

    #content {
        margin-left: $side-width;
        margin-right: 20px;
        @media(max-width: 600px) {
            margin-right: 0px;
        }
    }


</style>