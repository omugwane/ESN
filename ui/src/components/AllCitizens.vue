<template>
    <div class="citizens-list-wrapper">
        <h4 class="display-4">ESN citizens directory</h4>
        <ul class="list-group">
            <li class="list-group-item"
                v-for="citizen in citizens" :key="citizen.username">
                <div class="citizen-names">
                    {{citizen.username}} <span v-if="citizen.firstName.trim()!==''">({{citizen.firstName+ ', '+citizen.lastName}})</span>
                </div>
                <div class="citizen-details">
                    <small><span class="mdi mdi-email"/> {{citizen.email}}</small> <small><span class="mdi mdi-phone"/>
                    {{citizen.phone}}</small>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import * as api from '../api'

    export default {
        name: "AllCitizens",
        created() {
            this.getAllCitizens()
        },
        data() {
            return {
                citizens: [
                    /*{
                        username: "Bapt",
                        firstName: "Jean Baptiste",
                        lastName: "Tuyizere",
                        email: 'jtuyizer@andrew.cmu.edu',
                        phone: '0786500579'
                    },*/
                ]
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

    .citizens-list-wrapper {
        margin: 16px;
        overflow-y: auto;
        @media (min-height: 600px) {
            margin: 16px 20%;
        }

        .list-group-item {
            display: flex;
            align-items: center;
            flex-flow: wrap;
        }

        .display-4 {
            font-size: 3rem;
            font-weight: 300;
            line-height: 1.2;
            margin-bottom: 16px;
        }

        .citizen-names {
            font-size: 1.3em;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";

            span {
                font-size: 0.8em;
                font-style: italic;
            }
        }

        .citizen-details {
            @media (max-width: 600px) {
                margin-left: 0px;
                small {
                    display: block;
                }
            }
            @media (min-width: 600px) {
                margin-left: 16px;
            }
        }

    }
</style>