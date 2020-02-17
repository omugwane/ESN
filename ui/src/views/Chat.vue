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
                        <a href="#">Chat</a>
                    </div>
                    <div class="menu-item">
                        <a href="#">All users</a>
                    </div>
                </div>
                <div class="side-footer">
                    <button type="button">Sign out</button>
                </div>
            </div>
            <div id="chat-room">
                <div id="chats">
                    <div v-for="(chat,index) in chats"
                         :key="index"
                         :class="(chat.username === loggedInUsername)? 'sent-msg-box': 'received-msg-box'">
                        <div class="message"
                             :class="(chat.username === loggedInUsername)? 'sent': 'received'">
                            <h6 class="chat-owner">{{(chat.username === loggedInUsername)?
                                'Me':`${chat.username}`}}</h6>
                            <div class="msg-body"> {{chat.body}}</div>
                        </div>
                    </div>
                </div>
                <div id="chat-form">
                    <input class="input-chat" type="text" placeholder="Enter message">
                    <button type="button" class="btn-post-chat">Post</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Chat",
        created() {
            this.getAllChats();
        },
        data() {
            return {
                loggedInUsername: 'bapt',
                loading: false,
                chats: [
                    {
                        username: 'username',
                        body: "This one adds a right triangle on the left, flush at the top by using .tri-right and\n" +
                            ".left-top to specify the location."
                    },
                    {
                        username: 'bapt',
                        body: "This one adds a right triangle on the left, flush at the top by using .tri-right and\n" +
                            ".left-top to specify the location."
                    },
                    {
                        username: 'username',
                        body: "This one adds a right triangle on the left, flush at the top by using .tri-right and\n" +
                            ".left-top to specify the location."
                    },
                    {
                        username: 'bapt',
                        body: "This one adds a right triangle on the left, flush at the top by using .tri-right and\n" +
                            ".left-top to specify the location."
                    }
                ]
            }
        },
        methods: {
            postChat() {

            },
            getAllChats() {

            },
            logout() {

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

    $header-height: 64px;
    $side-width: 20%;
    $chat-form-height: 64px;
    $received-chat-bg-color: #FFEDE6;
    $sent-chat-bg-color: #E8D1DC;

    .page-wrapper {
        position: relative;
    }

    .page-title {
        color: $primary;
    }

    .header {
        border-bottom: 1px solid $secondary;
        height: $header-height;
        background-color: #E6E6E6;
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

    #chat-room {
        margin-left: $side-width;
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