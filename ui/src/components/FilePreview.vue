<template>
    <div>
        <sweet-modal ref="modal"
                     enable-mobile-fullscreen
                     overlay-theme="dark"
                     blocking>
            <template slot="title">
                <h4 class="modal-title">Video Preview</h4>
            </template>
            <div class="row">
                <div class="col-md-8">
                    <video-player :options="videoOptions" v-if="file && videoOptions && visible"/>
                </div>
                <div class="col-md-4 right-side">
                    <div class="file-details">
                        <h3 class="subtitle">Details</h3>
                        <p>Name: {{file.name}}</p>
                        <p>Size: {{((file.size/1024) /1024).toFixed(2)}} MB</p>
                        <p>Type: {{file.type}}</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col mt-3">
                    <label for="file-caption">Caption</label>
                    <textarea name="caption" id="file-caption" v-model="fileCaption"/>
                    <div class="actions mb-4">
                        <button class="btn btn-primary mr-3" @click="submitChat">Send</button>
                        <button class="btn btn-secondary" @click="closeModal">Cancel</button>
                    </div>

                    <b-alert v-model="response.success" variant="success" dismissible>
                        {{response.message}}
                    </b-alert>
                    <b-alert v-model="response.error" variant="danger" dismissible>
                        {{response.message}}
                    </b-alert>
                </div>
            </div>
        </sweet-modal>
    </div>
</template>

<script>
    import VideoPlayer from "./VideoPlayer";
    import {SweetModal} from 'sweet-modal-vue'
    import {UPLOAD_CHAT_FILE} from './../helpers/api'

    export default {
        name: "FilePreview",
        components: {
            SweetModal,
            VideoPlayer
        },
        props: {
            file: {
                type: File,
                default: null
            },
            fileType: {
                type: String,
                default: 'video'
            },
            visible: {
                type: Boolean,
                default: false
            },
            chatDetails: {
                type: Object,
                default: null
            }
        },
        mounted() {
            this.$refs.modal.open()

            let btnClose = document.querySelector('div.sweet-action-close');
            btnClose.addEventListener('click', () => {
                this.closeModal();
            })
        },
        data() {
            return {
                fileCaption: '',
                response: {
                    success: false,
                    error: false,
                    message: '',
                }
            }
        },
        computed: {
            videoOptions() {
                if (this.fileType === 'video' && this.file) {
                    return {
                        autoplay: false,
                        controls: true,
                        fluid: true,
                        sources: [
                            {
                                src: URL.createObjectURL(this.file),
                                type: "video/mp4"
                            }
                        ]
                    }
                }

                return null
            },
        },
        watch: {},
        methods: {
            resetMessage() {
                this.response.success = false;
                this.response.error = false;
            },
            showMessage(success, message) {
                this.resetMessage();
                this.response.message = message;
                if (success)
                    this.response.success = true;
                else
                    this.response.error = true;

            },
            closeModal() {
                this.$emit('closed')
            },
            submitChat() {
                if (this.chatDetails.chatSender) {
                    let formData = new FormData();
                    formData.append('video', this.file, this.file.name);
                    formData.append('content', this.fileCaption);

                    formData.append('sender', this.chatDetails.chatSender);
                    formData.append('receiver', this.chatDetails.chatReceiver);

                    let vm = this;

                    vm.$http.post(UPLOAD_CHAT_FILE, formData).then((response) => {
                        vm.showMessage(true, response.data.message);
                    }).catch((error) => {
                        vm.showMessage(false, error.data.message);
                        /*this.$swal({
                            text: "Error occurred! ::" + error.message,
                            icon: 'error',
                            toast: false,
                            showConfirmButton: true,
                        });*/
                        console.log("Upload Error ", error);
                    })
                } else {
                    this.showMessage(false, 'Only a registered citizen can send chats!');
                    /*this.$swal({
                        text: 'Only a registered can send chats!',
                        icon: 'error',
                        toast: false,
                        showConfirmButton: true,
                    });*/
                }
            }
        }
    }
</script>

<style lang="scss">
    @import "src/assets/colors";

    .modal-title {
        font-size: 2em !important;
        margin-top: 16px;
    }

    .sweet-modal-overlay.theme-dark {
        background: rgba(24, 32, 40, 0.7);
    }

    .right-side {
        .file-details {
            .subtitle {

            }
        }

        button {
            margin-right: 8px;
        }
    }

    #file-caption {
        display: block !important;
        width: 100% !important;
        border: 1px solid $dark-5;
        margin-top: 4px;
    }

    .actions {
        margin-top: 16px;
    }
</style>