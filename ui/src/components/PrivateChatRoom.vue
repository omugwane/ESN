<template>
    <div id="private-chat-room">
        <div id="citizens-list">
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
        <ChatRoom v-if="chatWithCitizen" :chat-with-citizen="chatWithCitizen" class="chat-room"/>
        <div v-else class="chat-room no-citizen-selected">
            <span>Select a citizen to chat with privately</span>
        </div>
    </div>
</template>

<script>
    import * as api from "../helpers/api";
    import ChatRoom from "./ChatRoom";

    export default {
        name: "PrivateChatRoom",
        components: {ChatRoom},
        created() {
            this.getAllCitizens()
        },
        data() {
            return {
                citizens: [],
                chatWithCitizen: null
            }
        },
        methods: {
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

        #citizens-list {
            width: 20%;
            padding: 8px;
            box-shadow: 3px 2px 4px -2px $dark-5;
            margin-right: 5px;

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

            &.no-citizen-selected {
                display: flex;
                justify-content: center;
                align-items: center;
                font-family: $titleFontFamily;
                font-size: 2rem;
                font-weight: 200;
            }
        }
    }
</style>