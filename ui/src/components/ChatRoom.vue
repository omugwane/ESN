<template>

    <div id="chat-room">
        <div id="chats" ref="chatsContainer">
            <div v-for="chat in chats"
                 :key="chat._id"
                 class="chat"
                 :class="(chat.sender === loggedInUsername)? 'sent-msg-box': 'received-msg-box'">
                <div class="message"
                     :class="(chat.sender === loggedInUsername)? 'sent': 'received'">
                    <div class="heading">
                        <div class="title">
                            <h6 class="chat-owner">
                                {{(chat.sender === loggedInUsername)? 'Me':`${chat.sender}`}}
                            </h6>
                            <small class="citizen-status" :style="{color: getStatusColor(chat.status)}">
                                status: {{getStatusLabel(chat.status)}}
                            </small>
                        </div>
                        <small>
                            {{ chat.postedAt | moment("dddd, MMMM Do YYYY, h:mm a") }}
                        </small>
                    </div>
                    <div v-if="chat.type === 'video'" class="video-thumbnail">
                        <VideoPlayer :options="getVideoOptions(chat.fileUrl)"/>
                        <button class="open-player" @click="showPlayer(chat.fileUrl)">
                            Open player <span class="mdi mdi-arrow-expand"/>
                        </button>
                    </div>
                    <div v-show="chat.content.length !== 0" class="msg-body" :class="{caption: chat.type === 'video'}">
                        <small v-if="chat.type === 'video'" class="file-caption">Caption</small>
                        {{chat.content}}
                    </div>
                </div>
            </div>
            <p v-if="chats.length < 1" class="text-center mt-3">
                <small>No chats available yet!</small>
            </p>
        </div>
        <div id="file-attachments-popup" v-show="attachmentsPopupShown">
            <div class="popup-header">
                <small><i>Attach file</i></small>
            </div>
            <div class="attach-buttons">
                <button type="button" @click="selectFile('video')">
                    <span class="mdi mdi-video-plus"/>
                </button>
            </div>
            <!--File selector. When clicked, opens up file explorer to select file. It is hidden and the click event
            is triggered programmatically by a function named: selectFile(fileType)-->
            <form ref="frmFileSelector">
                <input type="file" ref="fileSelector" id="file-selector"
                       @change="onFileSelection"
                       accept="video/mp4,video/x-m4v,video/*">
            </form>
        </div>
        <div id="chat-form">
<<<<<<< HEAD
            <input @keyup.enter="postChat"
                   v-model="newChat" class="input-chat" type="text" placeholder="Enter message">
            <input type="file" name="image" id="image" accept="image/*"/>
            <button @click="uploadForm" type="button" class="btn-post-chat">
=======
            <div class="input-chat-box">
                <button @click="attachmentsPopupShown=!attachmentsPopupShown" type="button"
                        id="btn-open-attachment-popup">
                    <span class="mdi mdi-attachment mdi-24px"/>
                </button>
                <input @keyup.enter="postChat"
                       v-model="newChat" class="input-chat" type="text" placeholder="Enter message">
            </div>
            <button @click="postChat" type="button" class="btn-post-chat">
>>>>>>> share-video
                <span class="mdi mdi-send mdi-24px"/>
            </button>
        </div>

        <FilePreview :chat-details="chatDetails" :file="selectedFile" :visible="showPreview"
                     @closed="disposeFile"
                     v-if="selectedFile"/>
        <!--        Video Player Modal-->
        <sweet-modal ref="modal"
                     id="modal-player"
                     enable-mobile-fullscreen
                     overlay-theme="dark"
                     modal-theme="dark"
                     width="70%"
                     blocking>
            <template slot="title">
                <h5 class="modal-title">Video Player</h5>
            </template>
            <div id="player">
                <video-player :options="playerDetails" v-if="playerShown"/>
            </div>
        </sweet-modal>
    </div>
    
</template>

<script>
    import * as api from "../helpers/api";
    import {eventBus} from '../main'
    import {STATUSES} from '../helpers/statuses'
    import FilePreview from "./FilePreview";
    import VideoPlayer from "./VideoPlayer";
    import {SweetModal} from 'sweet-modal-vue'

    export default {
        name: "ChatRoom",
        components: {FilePreview, VideoPlayer, SweetModal},
        props: {
            chatWithCitizen: {
                type: Object,
                default: null
            },
            loggedInUsername: {
                type: String,
                required: true
            }
        },
        created() {
            if (this.chatWithCitizen)
                this.getPrivateChats()
            else
                this.getPublicChats();

        },
        mounted() {
            eventBus.$on('new-chat-message', (chat) => {
                //Checking if the chat is from the citizen currently being chatted with
                //and that the receiver is the loggedInUsername
                if (chat && this.chatWithCitizen && (chat.sender === this.chatWithCitizen.username || chat.sender === this.loggedInUsername)) {
                    this.chats = this.chats.concat(chat);
                } else if (chat && !chat.receiver) { //Checking if the chat is a public chat(Public chat has no receiver)
                    this.chats = this.chats.concat(chat);
                }
                this.scrollToLatestMessage();
            });

            let btnClose = document.querySelector('#modal-player div.sweet-action-close');
            btnClose.addEventListener('click', () => {
                this.closePlayer();
            })
        },
        data() {
            return {
                loading: false,
                newChat: '',
                chats: [],
                attachmentsPopupShown: false,
                selectedFile: null,
                showPreview: false,
                playerShown: false,
                playerDetails: {
                    autoplay: true,
                    controls: true,
                    fluid: true,
                    sources: [
                        {
                            src: '',
                            type: "video/mp4"
                        }
                    ]
                }
            }
        },
        computed: {
            chatDetails() {
                return {
                    chatReceiver: this.chatWithCitizen ? `${this.chatWithCitizen.username}` : null,
                    chatSender: this.loggedInUsername
                }
            },
        },
        watch: {
            chatWithCitizen: function (newVal) { //Detecting in private chat, when a citizen to chat with changes
                if (newVal)
                    this.getPrivateChats()
            }
        },
        methods: {
            showPlayer(videoUrl) {
                this.playerDetails.sources[0].src = api.getBaseURLFromOrigin() + videoUrl;
                this.playerShown = true;
                this.$refs.modal.open();
            },
            closePlayer() {
                this.playerShown = false;
            },
            selectFile(fileType) {
                this.showPreview = false
                if (fileType === 'video') {
                    this.$refs.fileSelector.click(); // Triggering the click event on the input file selector
                }
                this.attachmentsPopupShown = false;
            },
            onFileSelection() {
                this.selectedFile = this.$refs.fileSelector.files[0];
                // console.log(this.selectedFile)
                this.showPreview = true

                this.$refs.frmFileSelector.reset() // Resetting the field to caching problem when the same file is reselected
            },
            disposeFile() {
                this.showPreview = false;
                this.selectedFile = null;
            },
            getStatusColor(status) {
                return STATUSES[status.toUpperCase()].colorCode
            },
            getStatusLabel(status) {
                if (status.toUpperCase() === 'UNDEFINED')
                    return 'Not available'
                else
                    return status.toUpperCase()
            },
            postChat() {
                let vm = this;

                let chatReceiver = null;
            
                if (vm.chatWithCitizen !== null)
                    chatReceiver = vm.chatWithCitizen.username;

                let newChat = {
                    sender: vm.loggedInUsername,
                    content: vm.newChat,
                    receiver: chatReceiver
                };
                if (vm.newChat.trim().length !== 0) {
                    vm.$http.post(api.SAVE_CHAT, newChat).then(() => {
                        // console.log(data)
                        // vm.chats = vm.chats.concat(newChat);
                        vm.newChat = ''
                    }).catch((err) => {
                        alert(err)
                    })
                } else {
                    this.$swal({
                        text: 'Can not post empty chat!',
                        icon: 'error',
                        toast: false,
                        showConfirmButton: true,
                    });
                }
            },
            getPublicChats() {
                let vm = this;
                vm.$http.get(api.GET_ALL_CHATS).then(({data}) => {
                    vm.chats = data.data;
                    vm.scrollToLatestMessage();
                }).catch((err) => {
                    alert(err)
                })
            },
            getPrivateChats() {
                let vm = this;
                vm.$http.get(api.GET_ALL_CHATS + this.loggedInUsername + '/' + this.chatWithCitizen.username).then(({data}) => {
                    vm.chats = data.data;
                    vm.scrollToLatestMessage();
                }).catch((err) => {
                    alert(err)
                })
            }, // Fetch private chats from server

            //Options for the video player
            getVideoOptions(relativeVideoUrl) {
                return {
                    autoplay: false,
                    controls: true,
                    fluid: true,
                    sources: [
                        {
                            src: api.getBaseURLFromOrigin() + relativeVideoUrl,
                            type: "video/mp4"
                        }
                    ]
                }
            },

            /* Method used to scroll to the bottom of the page in ChatRoom in order to see the the latest Chat*/
            scrollToLatestMessage() {
                this.$nextTick(() => {
                    // let chats = document.querySelectorAll('#chats .chat');

                    // $('#chat-room-messages').scrollTop($('#chat-room-messages')[0].scrollHeight);
                    // this.$refs.chatsContainer.scrollTop = chats[chats.length - 1].scrollHeight;

                    this.$refs.chatsContainer.scrollTop = this.$refs.chatsContainer.scrollHeight;
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "src/assets/colors";
    @import "src/assets/sizes";
    @import "src/assets/includes";


    #chat-room {
        background-color: #E6E6E6;
        max-height: calc(100vh - #{$header-height});
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
        @media (max-width: 600px) {
            margin: 0 8px;
            width: 100%;
        }

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

        .video-thumbnail {
            width: calc(100% - 4px);
            margin: 2px;
            border: 2px outset $dark-5;
            position: relative;

            img {
                width: 100%;
            }

            .open-player {
                position: absolute;
                top: 8px;
                right: 8px;
                background-color: $dark-5;
                color: $primary;
                padding: 4px 8px;
                border: none;
                outline: none;
                border-radius: 4px;

                @media (max-width: 600px) {
                    display: none;
                }

                &:hover {
                    background-color: $secondary;
                }
            }
        }

        .msg-body {
            padding: 8px 16px;
            text-align: left;
            line-height: 1.5em;

            .file-caption {
                display: block;
                margin-top: -8px;
                color: $secondary;
                font-weight: bold;
                font-style: italic;
                font-size: 10px;
            }

            &.caption {
                border-left: 4px solid $secondary;
            }
        }
    }

    .heading {
        margin: 8px 16px -4px 16px;
        padding-bottom: 8px;

        .title {
            display: flex;
            flex-flow: wrap;
            align-items: center;

            .chat-owner {
                text-transform: capitalize;
            }

            .citizen-status {
                margin-left: 8px;
            }
        }
    }

    .received-msg-box {
        .message {
            background-color: $received-chat-bg-color;
        }

        .heading {
            border-bottom: 1px solid $sent-chat-bg-color;
        }
    }

    .sent-msg-box {
        display: flex;
        justify-content: flex-end;

        .message {
            background-color: $sent-chat-bg-color;
        }

        .heading {
            //margin: 8px 16px -4px 16px;
            //padding-bottom: 8px;
            border-bottom: 1px solid $received-chat-bg-color;
        }
    }

    .received-msg-box,
    .sent-msg-box {
        margin: 8px 0;
    }

    #chats {
        padding: 8px 16px;
        flex-grow: 1;
        height: calc(100vh - #{$header-height} - #{$chat-form-height});
        @include scroll-bar(0.3em);
        overflow-y: auto;

        @media (max-width: 600px) {
            margin: 0 8px;
        }

    }

    #chat-form {
        background-color: $primary;
        height: $chat-form-height;
        display: flex;
        align-items: center;
        padding: 8px 16px;

        .input-chat-box {
            display: flex;
            width: 100%;

            #btn-open-attachment-popup {
                position: relative;
                top: 0;
                left: 0;
                background-color: transparent;
                border: none;
                outline: none;

                &:hover {
                    color: $secondary;
                }

                span.mdi-attachment:hover {
                    transform: scale(1.5)
                }
            }

            .input-chat {
                margin-left: -48px;
            }
        }

        .input-chat {
            border: 1px solid;
            display: block;
            width: 100%;
            height: 48px;
            padding: 2px 8px 2px 56px;
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
<<<<<<< HEAD
    .gallery{
    display: flex;
    flex-wrap: wrap;
    width:100%;
    max-width: 700px;
    margin:0 auto;
}
.image{
    max-width: 50%;
    padding: 15px;
    box-sizing:border-box;
    position:relative;
}
img{
    width: 100%;
    display:block;
    
}
=======

    // CSS for the popup when the attachment button in the Text Box is clicked
    #file-attachments-popup {
        background-color: $primary;
        margin: 8px;
        padding: 8px 16px;
        min-width: 240px;
        max-width: 400px;
        border: 2px solid $secondary;
        border-radius: 4px;
        position: absolute;
        bottom: $chat-form-height; //Offsetting chat form height
        left: 4px;


        //The bottom arrow on the popup
        &:after {
            content: ' ';
            position: absolute;
            width: 0;
            height: 0;
            left: 0px;
            right: auto;
            /*top: auto;*/
            bottom: -52px;
            border: 24px solid;
            border-color: $secondary transparent transparent transparent;
        }

        .attach-buttons {
            display: flex;
            flex-wrap: wrap;

            button {
                width: 42px;
                height: 42px;
                display: flex;
                justify-content: center;
                align-items: center;
                outline: none;
                border: none;
                background-color: transparent;

                &:hover {
                    background-color: $secondary-1;
                }

                span {
                    &.mdi {
                        line-height: 2px;
                        font-size: 36px !important;
                        color: $secondary !important;
                    }
                }
            }
        }

        #file-selector {
            display: none;
        }
    }


</style>
<style lang="scss">
    #modal-player {
        .sweet-modal {
            @media (max-width: 600px) {
                width: 100% !important;
            }
        }
    }
>>>>>>> share-video
</style>