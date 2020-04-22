<template>
    <div id="post-announcemnt">
        <div id="wrapper">
            <form id="announcement-form"
                  v-if="user.role === 'Coordinator' || user.role === 'Administrator'">
        <textarea
                @keyup.enter="postAnnouncement"
                v-model="newAnnouncement"
                class="input-announcement"
                rows="5"
                placeholder="Enter announcement"/>
                <button @click="postAnnouncement" type="button" class="btn-post-announcement">
                    Post Announcement
                    <span class="mdi mdi-send"/>
                </button>
            </form>
            <h3>List of announcements</h3>
            <div id="announcements">
                <div class="announcement" v-for="(announcement, index) in announcements" :key="index">
                    <h4>{{announcement.sender}}</h4>
                    <div class="announcement-content">{{announcement.content}}</div>
                    <small>{{announcement.postedAt}}</small>
                </div>
                <p v-if="announcements.length < 1" class="text-center mt-3">
                    <small>No announcements available yet!</small>
                </p>
            </div>
        </div>
    </div>
</template>


<script>
    import * as api from "../helpers/api";

    import {eventBus} from "../main";

    export default {
        name: "PostAnnouncement",
        created() {
            eventBus.$on('updateUserProfile', (data) => {
                if (data.isMe) {
                    this.user.username = data.user.username;
                    this.user.role = data.user.role;
                }
            });

            let user = this.$cookies.get("user");
            this.user.username = user.username;
            this.user.role = user.role;
            this.getAllAnnouncements();
        },
        mounted() {
            eventBus.$on('newAnnouncement', (announcement) => {
                if (announcement.sender !== this.user.username) {
                    this.announcements = this.announcements.concat(announcement);
                }
            })
        },
        data() {
            return {
                user: {username: '', role: ''},
                newAnnouncement: "",
                announcements: []
            };
        },
        // computed:{
        //   sortedAnnouncements(){

        //   }
        // },
        methods: {
            postAnnouncement() {
                let vm = this;
                let newAnn = {
                    sender: vm.user.username,
                    content: vm.newAnnouncement,
                    //postedAt: Date.now
                };
                if (vm.newAnnouncement.trim().length !== 0) {
                    vm.$http
                        .post(api.SAVE_ANNOUNCEMENT, newAnn)
                        .then(() => {
                            // console.log(data)
                            vm.announcements = vm.announcements.concat(newAnn);
                            vm.newAnnouncement = "";
                        })
                        .catch(err => {
                            alert(err);
                        });
                } else alert("You cannot post empty announcement!");
            },
            getAllAnnouncements() {
                let vm = this;
                vm.$http
                    .get(api.GET_ALL_ANNOUNCEMENTS)
                    .then(({data}) => {
                        vm.announcements = data.data;
                    })
                    .catch(err => {
                        alert(err);
                    });
            }
        }
    };
</script>

<style lang="scss" scoped>
    @import "src/assets/colors";
    @import "src/assets/sizes";

    #post-announcemnt {
        width: 100%;
        display: flex;
        justify-content: center;

        #wrapper {
            width: 60%;
            padding: 8px 16px;
            @media (max-width: 600px) {
                width: 100%;
            }
        }
    }

    #announcements {
        padding: 8px 16px;
        flex-grow: 1;
        overflow-y: auto;
        height: calc(100vh - #{$header-height} - #{184px});
    }

    #announcement-form {
        background-color: $primary;
        padding: 8px 16px;
        display: flex;
        flex-direction: column;
        height: 120px;

        .input-announcement {
            border: 1px solid;
            display: block;
            width: 100%;
            padding: 2px 8px;
            border-radius: 4px;
        }

        .btn-post-announcement {
            // width: 64px;
            height: 48px;
            margin: 2px 4px;
            border: 1px solid;
            border-radius: 12px;
            align-self: flex-end;
        }
    }

    #announcements {
        .announcement {
            padding: 8px 16px;

            &:not(:first-child) {
                border-top: 1px solid $dark-1;
            }
        }
    }
</style>