<template>
    <div id="post-announcemnt">
        <div id="announcements">
            <div v-for="announcement in announcements"
                 :key="announcement._id"
                 :class="(announcement.sender === loggedInUsername)? 'sent-msg-box': 'received-msg-box'">
                <div class="message"
                     :class="(announcement.sender === loggedInUsername)? 'sent': 'received'">
                    <div class="heading">
                        <div class="title">
                            <h6 class="announcement-owner">
                                {{(announcement.sender === loggedInUsername)? 'Me':`${announcement.sender}`}}
                            </h6>
                        </div>
                        <small>{{new Date()}}</small>
                    </div>
                    <div class="msg-body"> {{announcement.content}}</div>
                </div>
            </div>
            <p v-if="announcements.length < 1" class="text-center mt-3">
                <small>No announcements available yet!</small>
            </p>
        </div>
        <div id="announcement-form">
            <input @keyup.enter="postAnnouncement"
                   v-model="newAnnouncement" class="input-announcement" type="text" placeholder="Enter announcement">
            <button @click="postAnnouncement" type="button" class="btn-post-announcement">
                <span class="mdi mdi-send mdi-24px"/>
            </button>
        </div>
    </div>
</template>


<script>
    import * as api from "../helpers/api";
    // import {eventBus} from "../main";

    export default {
        name: "PostAnnouncement",
        // components: {ChatRoom},
        created() {
            let user = this.$cookies.get('user')
            this.loggedInUsername = user.username;
            // this.getAllChats();
        },
        mounted() {
            /*eventBus.$on('new-chat-message', (chat) => {
                if (chat && chat.sender !== this.loggedInUsername) {
                    // console.log("SocketIO data", data)
                    this.chats = this.chats.concat(data);
                }
            })*/
        },
        data() {
            return {
                loading: false,
                loggedInUsername: '',
                newAnnouncement: '',
                announcements: []
            }
        },
        methods: {
            postAnnouncement() {
                let vm = this;
                let newAnnouncement = {
                    sender: vm.loggedInUsername,
                    content: vm.newAnnouncement
                }
                if (vm.newAnnouncement.trim().length !== 0) {
                    vm.$http.post(api.SAVE_ANNOUNCEMENT, newAnnouncement).then(() => {
                        // console.log(data)
                        vm.announcements = vm.announcements.concat(newAnnouncement);
                        vm.newAnnouncement = ''
                    }).catch((err) => {
                        alert(err)
                    })
                } else
                    alert("You cannot post empty announcement!")
            },
            getAllAnnouncements() {
                let vm = this;
                vm.$http.get(api.GET_ALL_ANNOUNCEMENTS).then(({data}) => {
                    vm.announcements = data.data
                }).catch((err) => {
                    alert(err)
                })
            },
        }
    }
</script>

<style lang="scss" scoped>
    @import "src/assets/colors";
    @import "src/assets/sizes";

    #announcement-room {
        background-color: #E6E6E6;
        min-height: calc(100vh - #{$header-height});
        position: relative;
        display: flex;
        flex-direction: column;
    }

    .message {
        margin: 0 40px;
        display: inline-block;
        position: relative;
        width: 40%;
        height: auto;

        &.received:after {
            content: ' ';
            position: absolute;
            width: 0;
            height: 0;
            left: -20px;
            right: auto;
            top: 0px;
            bottom: auto;
            border: 22px solid;
            border-color: $received-chat-bg-color transparent transparent transparent;
        }

        &.sent:after {
            content: ' ';
            position: absolute;
            width: 0;
            height: 0;
            right: -20px;
            left: auto;
            top: 0px;
            bottom: auto;
            border: 22px solid;
            border-color: $sent-chat-bg-color transparent transparent transparent;
        }

        .msg-body {
            padding: 1em;
            text-align: left;
            line-height: 1.5em;
        }
    }

    .received-msg-box {
        .message {
            background-color: $received-chat-bg-color;
        }

        .announcement-owner {
            margin: 8px 16px -4px 16px;
            padding-bottom: 8px;
            border-bottom: 1px solid $sent-chat-bg-color;
            text-transform: capitalize
        }
    }

    .sent-msg-box {
        display: flex;
        justify-content: flex-end;

        .message {
            background-color: $sent-chat-bg-color;
        }

        .announcement-owner {
            margin: 8px 16px -4px 16px;
            padding-bottom: 8px;
            border-bottom: 1px solid $received-chat-bg-color;
            text-align: right;
        }
    }

    .received-msg-box,
    .sent-msg-box {
        margin: 8px 0;
    }

    #announcements {
        padding: 8px 16px;
        flex-grow: 1;
        overflow-y: auto;
        height: calc(100vh - #{$header-height} - #{$chat-form-height});
    }

    #announcement-form {
        background-color: $primary;
        height: 64px;
        display: flex;
        align-items: center;
        padding: 8px 16px;

        .input-announcement {
            border: 1px solid;
            display: block;
            width: 100%;
            height: 48px;
            padding: 2px 8px;
            border-radius: 4px;
        }

        .btn-post-announcement {
            width: 64px;
            height: 48px;
            margin: 2px 4px;
            border: 1px solid;
            border-radius: 4px;
        }
    }
</style>