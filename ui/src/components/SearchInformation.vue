<template>
    <div class="search-page-wrapper">
        <h4 class="display-4">Search Information</h4>

        <Multiselect></Multiselect>
    </div>
</template>

<script> import Multiselect from 'vue-multiselect'
    export default {
        name: "SearchInformation",
        components:{
            Multiselect
        },
        created() {

        },
        data(){
            return{
                searches:[
                    {
                        label: 'Citizens by username',
                        context: 'citizens',
                        criteria: 'username',
                        text: ''
                    },
                    {
                        label: 'Citizens by status',
                        context: 'citizens',
                        criteria: 'status'
                    },
                    {
                        label: 'Announcement',
                        context: 'announcements',
                        criteria: 'content'
                    },
                    {
                        label: 'Public chats',
                        context: 'public_chats',
                        criteria: 'content'
                    },
                    {
                        label: 'Private chats',
                        context: 'private_chats',
                        criteria: 'content'
                    }
                ],
                searchText: ''
            }
        },
        methods:{

        }
    }
</script>

<style scoped>

</style>