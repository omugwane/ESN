<template>
    <div id="private-chat-room">
        <div class="side-list">
            <button @click="toggleCitizensList"
                    id="btn-toggle-citizens-list"
                    type="button"
                    v-show="$mq.below(600)">
                <span class="mdi mdi-account-details-outline"></span>
            </button>
            <div :class="(!showCitizensList)? 'hidden':''" id="citizens-list">
                <h6 class="title">All Citizens</h6>
                <ul>
                    <li v-for="citizen in citizens"
                        :key="citizen._id"
                        @click="chatWithCitizen=citizen"
                        :class="(chatWithCitizen!==null && chatWithCitizen.username===citizen.username)? 'active':''">
                        <div class="heading">
                            <span>{{citizen.username}}</span> <span class="mdi mdi-chevron-right"/>
                        </div>
                        <!--                    <div class="latest-message">-->
                        <!--                        sma-->
                        <!--                    </div>-->
                        <small>Status: </small>
                    </li>
                </ul>
            </div>
        </div>
        <ChatRoom v-if="chatWithCitizen" :chat-with-citizen="chatWithCitizen" class="chat-room"/>
        <div v-else class="chat-room no-citizen-selected">
            <span>Select a citizen to chat with privately</span>
        </div>
    </div>
</template>

<script>
    import * as api from "../helpers/api";
    import ChatRoom from "./ChatRoom";
    import {eventBus} from "../main";

    export default {
        name: "PrivateChatRoom",
        components: {ChatRoom},
        created() {
            this.getAllCitizens()
        },
        mounted() {
            /*eventBus.$on('new-chat-message', (chat) => {
                //Checking if the chat is from the citizen currently being chatted with
                //and that the receiver is the loggedInUsername
                if (chat && this.chatWithCitizen && this.chatWithCitizen.username === chat.sender && chat.receiver === this.loggedInUsername) {
                    // this.chats = this.chats.concat(data);
                }
            })*/
        },
        data() {
            return {
                citizens: [],
                loggedInUsername: '',
                chatWithCitizen: null, // The user whom to chat with
                showCitizensList: true, //This variable shows or hides the list of citizens to chat with for UI responsiveness
            }
        },
        watch: {
            '$mq.resize': 'screenResize'
        },
        methods: {
            toggleCitizensList() {
                if (this.$mq.below(600)) {
                    this.showCitizensList = !this.showCitizensList
                } else
                    this.screenResize();

            },
            screenResize() {
                if (this.$mq.below(600)) {
                    this.showCitizensList = false;
                } else {
                    this.showCitizensList = true;
                }
            },
            getAllCitizens() {
                let vm = this;
                vm.$http.get(api.GET_ALL_USERS).then(({data}) => {
                    vm.citizens = data.data
                }).catch((err) => {
                    alert(err)
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../assets/fonts";
    @import "../assets/colors";
    @import "../assets/sizes";
    @import "../assets/includes";

    #private-chat-room {
        display: flex;
        position: relative;

        #btn-toggle-citizens-list {
            display: block;
            width: 24px;
            height: 24px;
            padding: 0;
            border-bottom-right-radius: 16px;
            border-top: none;
            border-left: none;
            border-bottom: 1px solid transparent;
            border-right: 1px solid transparent;
            box-shadow: 3px 2px 4px -2px $dark-5;
            outline: none;
        }

        .side-list {
            width: 20%;

            @media (max-width: 600px) {
                width: auto;
                z-index: 1;
                background-color: $primary;
            }
        }

        #citizens-list {
            padding: 8px;
            box-shadow: 3px 2px 4px -2px $dark-5;
            margin-right: 5px;
            @media (max-width: 600px) {
                width: 232px;
                box-shadow: none;
            }

            &.hidden {
                display: none;
            }


            & > .title {
                font-family: $titleFontFamily;
                font-size: 1.5rem;
                font-weight: 100;
                line-height: 1.2;
                color: $secondary;

                &:after {
                    content: "";
                    height: 1px;
                    display: block;
                    margin-top: 8px;
                    margin-left: 16px;
                    margin-right: 16px;
                    background-color: $dark;
                }
            }

            ul {
                padding: 0;
                margin-top: 8px;
                margin-left: 16px;
                list-style: none;
                max-height: calc(100vh - #{$header-height} - 81px);
                overflow-y: auto;

                @include scroll-bar;


                li {
                    padding: 8px 16px;
                    border-bottom: 1px solid $dark-1;
                    text-transform: capitalize;

                    .heading {
                        display: flex;
                        justify-content: space-between;
                    }

                    &:hover {
                        background-color: $secondary-1;
                        cursor: pointer;
                    }

                    &.active {
                        background-color: $secondary-1;
                    }
                }
            }
        }

        .chat-room {
            width: 80%;
            @media (max-width: 600px) {
                width: 100%;
                margin: 0 -24px;
            }

            &.no-citizen-selected {
                display: flex;
                justify-content: center;
                align-items: center;
                font-family: $titleFontFamily;
                font-size: 2rem;
                font-weight: 200;
                @media(max-width: 600px) {
                    margin-top: 80px;
                    font-size: 1rem;
                    text-align: center;
                }
            }
        }
    }
</style>