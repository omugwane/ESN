<template>
    <div>
        <sweet-modal ref="modal"
                     enable-mobile-fullscreen
                     overlay-theme="dark"
                     blocking
                     v-if="visible">
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
                        <p style="color: #A90C1C;font-weight: bold">Size (max is 30 MB): {{getFileSize}} MB</p>
                        <p>Type: {{file.type}}</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col mt-3">
                    <label for="file-caption">Caption</label>
                    <textarea name="caption" id="file-caption" v-model="fileCaption"
                              placeholder="Type message here..."/>
                    <div class="actions mb-4">
                        <button class="btn btn-secondary mr-3" @click="closeModal">
                            Close <span class="mdi mdi-close"/>
                        </button>
                        <button class="btn btn-primary btn-send" @click="submitChat">
                            Send <span class="mdi mdi-send"/>
                        </button>
                        <loading :active.sync="loader.loading"
                                 :can-cancel="false"
                                 :is-full-page="true"
                                 :background-color="loader.backgroundColor"
                                 :opacity="loader.opacity"
                                 :loader="loader.loaderType"
                                 :color="loader.color"></loading>
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
    import Loading from 'vue-loading-overlay';
    import 'vue-loading-overlay/dist/vue-loading.css';

    export default {
        name: "FilePreview",
        components: {
            SweetModal,
            VideoPlayer,
            Loading
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
            this.$refs.modal.open();

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
                },
                loader: {
                    loading: false,
                    backgroundColor: '#fff',
                    opacity: 0.5,
                    loaderType: 'dots',
                    color: '#A90C1C'
                },
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
            getFileSize() {
                if (this.file)
                    return ((this.file.size / 1024) / 1024).toFixed(2);
                return null;
            },
        },
        watch: {},
        methods: {
            resetMessage() {
                this.response.success = false;
                this.response.error = false;
            },
            showMessage(success, message) {
                this.loader.loading = false;
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
                let fileSize = this.getFileSize || 0;
                if (this.chatDetails.chatSender && fileSize > 0 && fileSize <= 30) {
                    let formData = new FormData();
                    formData.append('file', this.file, this.file.name);
                    formData.append('content', this.fileCaption);

                    formData.append('sender', this.chatDetails.chatSender);
                    formData.append('receiver', this.chatDetails.chatReceiver);

                    let vm = this;
                    vm.loader.loading = true;

                    vm.$http.post(UPLOAD_CHAT_FILE, formData).then((response) => {
                        vm.showMessage(true, response.data.message);
                    }).catch(() => {
                        vm.showMessage(false, "Uploading video failed. Note that video should not be larger than 100 MB");
                    })
                } else {
                    if (fileSize > 30)
                        this.showMessage(false, 'File is too big! Cannot submit a file larger than 30 MB');
                    else if (fileSize <= 0)
                        this.showMessage(false, 'File is too small! Cannot submit 0 MB file.');
                    else
                        this.showMessage(false, 'Only a registered citizen can send chats!');
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
        padding: 8px 16px;
        border-radius: 8px;
        outline: none;

        &:focus {
            border: 1px solid deepskyblue;
        }
    }

    .actions {
        margin-top: 16px;

        button {
            width: 96px;
        }
    }
</style>