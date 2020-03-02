<template>
    <div class="citizens-list-wrapper">
        <h4 class="display-4">ESN citizens directory</h4>
        <div class="wrapper">
            <ul class="list-group" v-if="citizens.length > 0">
                <li class="list-group-item"
                    v-for="citizen in citizens" :key="citizen.username">
                    <div class="citizen-names">
                        {{citizen.username}} <span v-if="citizen.firstName.trim()!==''">({{citizen.firstName+ ', '+citizen.lastName}})</span>
                    </div>
                    <div class="citizen-details">
                        <small><span class="mdi mdi-email"/> {{citizen.email}}</small> <small><span
                            class="mdi mdi-phone"/>
                        {{citizen.phone}}</small>
                    </div>
                </li>
            </ul>
            <div class="text-center" v-else>
                <small>No citizens available yet</small>
            </div>
        </div>
    </div>
</template>

<script>
    import * as api from '../helpers/api'

    export default {
        name: "AllCitizens",
        created() {
            this.getAllCitizens()
        },
        data() {
            return {
                citizens: []
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
    @import "../assets/sizes";

    .citizens-list-wrapper {
        margin: 16px;

        @media (min-width: 601px) {
            margin: 16px 20%;
        }
        @media (max-width: 600px) {
            margin: 8px 16px;
        }

        .wrapper {
            overflow-y: auto;
            max-height: calc(100vh - #{$header-height} - 112px);

            .list-group-item {
                padding: 4px 8px !important;
            }
        }

        .list-group-item {
            display: flex;
            align-items: center;
            flex-flow: wrap;
            @media (max-width: 600px) {
                display: block;
            }
        }

        .display-4 {
            font-size: 3rem;
            font-weight: 300;
            line-height: 1.2;
            margin-bottom: 16px;
            @media (max-width: 600px) {
                margin: 8px;
                font-size: 1.5rem;
            }
        }

        .citizen-names {
            font-size: 1.3em;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
            text-transform: capitalize;

            span {
                font-size: 0.8em;
                font-style: italic;
            }

            @media (max-width: 600px) {
                font-size: 12px;
                span {
                    /*display: none;*/
                }
            }
        }

        .citizen-details {
            @media (max-width: 600px) {
                display: none;
                margin-left: 0px;
                small {
                    display: block !important;
                }
            }
            @media (min-width: 600px) {
                margin-left: 16px;
            }
        }
    }
</style>