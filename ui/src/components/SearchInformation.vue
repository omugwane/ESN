<template>
    <div class="search-page-wrapper">
        <h4 class="display-4 text-center mt-4 page-title">Search Information</h4>

        <div class="row">
            <div class="col-md-5">
                <h5 class="section-title display-4">Search Form</h5>
                <div class="search-form">
                    <label for="search-options">Search context</label>
                    <multiselect v-model="selectedSearchOption"
                                 id="search-options"
                                 :options="searchOptions"
                                 label="label"
                                 track-by="label"
                                 :searchable="false"
                                 :close-on-select="true"
                                 :show-labels="false"
                                 placeholder="Select context"/>

                    <label for="search-field">Search Field</label>
                    <input type="text"
                           name="search-text"
                           @keyup.enter="search"
                           v-model="searchText"
                           id="search-field"
                           :placeholder="selectedSearchOption? selectedSearchOption.placeholder:'Select context first to search'">

                    <button type="button" id="btn-search" @click="search">
                        <span class="mdi mdi-magnify"/>
                        Search
                    </button>
                </div>
            </div>
            <div class="col-md-7">
                <h5 class="section-title display-4">Search Results</h5>
                <div class="search-results">
                    <div class="search-result" v-for="(result,index) in searchResults" :key="index">
                        <div class="heading">
                            {{(result.sender)? `${result.sender}`:`${result.username}`}} {{(result.status)? `(status: ${result.status} )`: ''}}
                        </div>
                        <div class="body">
                            <small v-if="result.postedAt">{{result.postedAt}}</small>
                            <div class="content">
                                {{(result.content || '')}}
                            </div>
                        </div>
                    </div>
                    <div class="search-result no-results" v-if="searchResults.length === 0">
                        <span class="mdi mdi-alert-outline mdi-24px"/> No search results!
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import stopWordsArray from "../helpers/stop_words_array";
    import * as api from "../helpers/api";

    export default {
        name: "SearchInformation",
        created() {
        },
        data() {
            return {
                searchOptions: [
                    {
                        label: 'Citizens by username',
                        placeholder: 'Type username here...',
                        context: 'citizens',
                        criteria: 'username',
                        searchText: ''
                    },
                    {
                        label: 'Citizens by status',
                        placeholder: 'Type status here...',
                        context: 'citizens',
                        criteria: 'status',
                        searchText: ''
                    },
                    {
                        label: 'Announcement',
                        placeholder: 'Type words to search for here...',
                        context: 'announcements',
                        criteria: 'content',
                        searchText: ''
                    },
                    {
                        label: 'Public chats',
                        placeholder: 'Type words to search for here...',
                        context: 'public_chats',
                        criteria: 'content',
                        searchText: ''
                    },
                    {
                        label: 'Private chats',
                        placeholder: 'Type words to search for here...',
                        context: 'private_chats',
                        criteria: 'content',
                        searchText: ''
                    }
                ],
                selectedSearchOption: null,
                searchText: '',
                searchResults: [],
            }
        },
        methods: {
            search() {
                let searchText = this.filterOutStopWords(this.searchText);
                searchText = searchText.join(' '); //Creating a string out of the array returned by filterOutStopWords()

                if (this.selectedSearchOption) {
                    this.selectedSearchOption.searchText = searchText;
                    this.$http.post(api.SEARCH, this.selectedSearchOption)
                        .then(({data}) => {
                            this.searchResults = data.data;
                            this.searchText = '';
                        })
                }
            },
            filterOutStopWords(searchText) {
                let searchWords = this.breakTextIntoArrayOfWords(searchText);
                return searchWords.filter((searchWord) => {
                    /*The condition is true when find function returns undefined(not found), otherwise it is false
                     *When the condition is false the searchWord is removed from the searchWords array
                     */
                    return !stopWordsArray.find(stopWord => searchWord === stopWord)
                })
            },
            breakTextIntoArrayOfWords(text) {
                return text.match(/\b(\w+)'?(\w+)?\b/g)
            }
        }
    }
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"/>

<style lang="scss" scoped>

    @import "src/assets/colors";
    @import "src/assets/fonts";

    .search-page-wrapper {
        padding: 0 16px;

        .search-form {
            margin-top: 8px;
            border: 1px solid $dark-1;
            padding: 8px 16px;
            display: flex;
            flex-direction: column;

            label {
                display: block;
                width: 200px;
            }

            #search-field {
                padding: 4px 8px;
                border: 1px solid $dark-1;
                border-radius: 4px;
                width: 100%;
                display: block;
                height: 40px;
            }

            #btn-search {
                margin-top: 8px;
                margin-bottom: 8px;
                padding: 4px 16px;
                border: 1px solid $secondary;
                color: $secondary;
                border-radius: 4px;
                align-self: flex-end;
            }
        }

        .page-title {
            margin-top: 16px;
            @media(max-width: 600px) {
                font-size: 1.5rem;
            }
        }

        .section-title {
            margin: 16px 0;
            font-size: 1.8rem;
            @media(max-width: 600px) {
                font-size: 1.2rem;
            }
        }

        .search-results {
            .search-result {
                border-radius: 4px;
                border: 1px solid $dark-1;
                padding: 8px 16px;
                margin-bottom: 8px;

                .heading {
                    margin-bottom: 8px;
                    font-size: 1.5rem;
                }
            }

            .no-results {
                color: $secondary;
                display: flex;
                align-items: center;

                span.mdi {
                    margin-right: 8px;
                }
            }
        }
    }
</style>