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
                    <div v-if="chat.type === 'image'" class="chat-image">
                        <img :src="getAbsoluteURL(chat.fileUrl)" alt="Chat image">
                    </div>
                    <div v-show="chat.content.length !== 0" class="msg-body" :class="{caption: chat.type !== 'text'}">
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
                <button type="button" @click="selectFile('video')"
                        class="lnh-4">
                    <span class="mdi mdi-video-plus mdi-36px"/>
                </button>
                <button type="button" @click="selectFile('image')">
                    <span class="mdi mdi-image-plus mdi-24px"/>
                </button>
            </div>
            <!--File selector. When clicked, opens up file explorer to select file. It is hidden and the click event
            is triggered programmatically by a function named: selectFile(fileType)-->
            <form ref="frmFileSelector">
                <input type="file" ref="fileSelector" id="file-selector"
                       @change="onFileSelection">
            </form>
        </div>

        <div id="image-preview" v-show="selectedFile && typeOfFileSelected==='image'">
            <div class="img-holder">
                <img :src="selectedImageUrl" alt="Image Preview">
            </div>

            <button id="btn-close-image-preview" @click="resetChatForm">
                <span class="mdi mdi-close mdi-24px"/>
            </button>
        </div>
        <div id="chat-form">
            <div class="input-chat-box">
                <button @click="attachmentsPopupShown=!attachmentsPopupShown" type="button"
                        id="btn-open-attachment-popup">
                    <span class="mdi mdi-attachment mdi-24px"/>
                </button>
                <input @keyup.enter="submitChat"
                       ref="inputChatText"
                       v-model="newChat" class="input-chat" type="text" placeholder="Enter message">
            </div>
            <button @click="submitChat" type="button" class="btn-post-chat">
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
    import {UPLOAD_CHAT_FILE} from "../helpers/api";

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
                typeOfFileSelected: '',
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
            selectedImageUrl() {
                return (this.selectedFile && this.typeOfFileSelected === 'image') ? URL.createObjectURL(this.selectedFile) : '';
            }
        },
        watch: {
            chatWithCitizen: function (newVal) { //Detecting in private chat, when a citizen to chat with changes
                if (newVal)
                    this.getPrivateChats()
            },
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
                this.typeOfFileSelected = fileType;

                let acceptOptions = '';
                if (fileType === 'video')
                    acceptOptions = 'video/mp4,video/x-m4v,video/*';
                else if (fileType === 'image')
                    acceptOptions = 'image/png,image/jpeg';


                this.showPreview = false; // Closing Video preview dialog
                this.$refs.fileSelector.setAttribute('accept', acceptOptions);
                this.$refs.fileSelector.click(); // Triggering the click event on the input file selector
                this.attachmentsPopupShown = false;
            },
            onFileSelection() {

                let selectedFile = this.$refs.fileSelector.files[0];

                let fileType = selectedFile.type.split('/')[0];

                if (fileType !== this.typeOfFileSelected) {
                    this.$swal({
                        text: "Unexpected file chosen. The file must of type " + this.typeOfFileSelected,
                        icon: 'error',
                        toast: false,
                        showConfirmButton: true,
                    });
                } else {
                    this.selectedFile = selectedFile;

                    if (this.typeOfFileSelected === 'video') {
                        this.showPreview = true;
                    } else if (this.typeOfFileSelected === 'image') {
                        this.$refs.inputChatText.focus();
                    }
                }

                this.$refs.frmFileSelector.reset(); // Resetting the field to caching problem when the same file is reselected
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
            submitChat() {
                this.$refs.inputChatText.blur();// Taking away the focus

                if (this.selectedFile != null)
                    this.submitImageChat();
                else
                    this.submitTextChat();
            },
            submitTextChat() {
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
            submitImageChat() {
                let vm = this;

                let imageSize = ((this.selectedFile.size / 1024) / 1024).toFixed(2);

                if (imageSize <= 5) {
                    let chatReceiver = null;

                    if (vm.chatWithCitizen !== null)
                        chatReceiver = vm.chatWithCitizen.username;

                    let formData = new FormData();
                    formData.append('file', this.selectedFile, this.selectedFile.name);
                    formData.append('content', this.newChat);

                    formData.append('sender', vm.loggedInUsername);
                    formData.append('receiver', chatReceiver);

                    vm.$http.post(UPLOAD_CHAT_FILE, formData).then((response) => {
                        vm.showMessage(true, response.data.message);
                        vm.resetChatForm()
                    }).catch(err => {
                        console.log("Error occurred", err);
                        vm.showMessage(false, "Uploading image failed. Note that image should not be larger than 5 MB");
                    })
                } else {
                    vm.showMessage(false, `Image size (${imageSize}) selected is bigger than 5 MB. Please, select a smaller size image.`);
                }
            },
            resetChatForm() {
                this.selectedFile = null;
                this.newChat = '';
                this.attachmentsPopupShown = false;
                this.showPreview = false;
                this.playerShown = false;
            },
            showMessage(success, message) {
                this.$swal({
                    text: message,
                    icon: success ? 'success' : 'error',
                    toast: false,
                    showConfirmButton: true,
                });
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
                            src: this.getAbsoluteURL(relativeVideoUrl),
                            type: "video/mp4"
                        }
                    ]
                }
            },
            getAbsoluteURL(relativeURL) {
                return api.getBaseURLFromOrigin() + relativeURL;
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

        .video-thumbnail,
        .chat-image {
            width: calc(100% - 4px);
            margin: 2px;
            border: 2px outset $dark-5;
            position: relative;
        }

        .video-thumbnail {
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

        .chat-image {
            img {
                width: 100%;
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
                background-color: $secondary-1;
                margin: 2px;
                border-radius: 50%;
                color: $secondary;

                &:hover {
                    background-color: $secondary-5;
                    color: $dark;
                }

                span {
                    &.mdi {
                        color: inherit;
                    }
                }

                &.lnh-4 {
                    line-height: 40px !important;
                }
            }
        }

        #file-selector {
            display: none;
        }
    }

    #image-preview {
        display: flex;
        justify-content: center;
        border-radius: 8px;

        margin: 8px;
        padding: 8px 16px;
        position: absolute;
        bottom: $chat-form-height; //Offsetting chat form height
        left: 4px;
        background-color: $secondary-5;

        width: calc(100% - 32px);

        .img-holder {
            width: 400px;

            img {
                width: 100%;
                border-radius: 8px;
            }
        }

        #btn-close-image-preview {
            width: 40px;
            height: 40px;
            outline: none;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            border-style: solid;
            position: absolute;
            top: 16px;
            right: 16px;

            &:hover {
                background-color: $secondary;
                color: white;
            }
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
</style>