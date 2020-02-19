<template>
    <div id="chat-room">
        <div id="chats">
            <div v-for="(chat,index) in chats"
                 :key="index"
                 :class="(chat.username === loggedInUsername)? 'sent-msg-box': 'received-msg-box'">
                <div class="message"
                     :class="(chat.username === loggedInUsername)? 'sent': 'received'">
                    <h6 class="chat-owner">{{(chat.username === loggedInUsername)?
                        'Me':`${chat.username}`}}</h6>
                    <div class="msg-body"> {{chat.content}}</div>
                </div>
            </div>
            <p v-if="chats.length < 1" class="text-center mt-3">
                <small>No chats available yet!</small>
            </p>
        </div>
        <div id="chat-form">
            <input @keyup.enter="postChat"
                   v-model="newChat" class="input-chat" type="text" placeholder="Enter message">
            <button @click="postChat" type="button" class="btn-post-chat">
                <span class="mdi mdi-send mdi-24px"/>
            </button>
        </div>
    </div>
</template>

<script>
    import * as api from "../api";

    export default {
        name: "ChatRoom",
        created() {
            let user = this.$cookies.get('user')
            console.log("Logged in user", user)

            this.getAllChats();
        },
        data() {
            return {
                loading: false,
                loggedInUsername: 'bapt',
                newChat: '',
                chats: [
                    /*{
                        username: 'username',
                        content: "This one adds a right triangle on the left, flush at the top by using .tri-right and\n" +
                            ".left-top to specify the location."
                    },*/
                ]
            }
        },
        methods: {
            postChat() {
                let vm = this;
                if (vm.newChat.trim().length !== 0) {
                    vm.$http.post(api.SAVE_CHAT,
                        {
                            username: vm.loggedInUsername,
                            target: '',
                            content: vm.newChat
                        }
                    ).then(({data}) => {
                        vm.chats = data.data
                    }).catch((err) => {
                        alert(err)
                    })
                } else
                    alert("Can not post empty chat!")
            },
            getAllChats() {
                let vm = this;
                vm.$http.get(api.GET_ALL_CHATS).then(({data}) => {
                    vm.chats = data.data
                }).catch((err) => {
                    alert(err)
                })
            },
            logout() {

            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "src/assets/colors";
    @import "src/assets/sizes";

    #chat-room {
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

        .chat-owner {
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

        .chat-owner {
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

    #chats {
        padding: 8px 16px;
        flex-grow: 1;
        overflow-y: auto;
        height: calc(100vh - #{$header-height} - #{$chat-form-height});
    }

    #chat-form {
        background-color: $primary;
        height: 64px;
        display: flex;
        align-items: center;
        padding: 8px 16px;

        .input-chat {
            border: 1px solid;
            display: block;
            width: 100%;
            height: 48px;
            padding: 2px 8px;
            border-radius: 4px;
        }

        .btn-post-chat {
            width: 64px;
            height: 48px;
            margin: 2px 4px;
            border: 1px solid;
            border-radius: 4px;
        }
    }
</style>