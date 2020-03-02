<template>
    <div class="content px-md-5">
        <h3 class="display-4">Share Status</h3>
        <div class = "mb-2">
            Your current status is {{currentStatus}}
        </div>
        <form action="">
            <div class="row title text-black-50 mb-1">
                <div class="col-md-1"></div>
                <div class="col-md-2">Name</div>
                <div class="col-md-3">Description</div>
                <div class="col-md-3">Color code</div>
                <div class="col-md-3">Icon</div>
            </div>
            <div v-for="(status, index) in statuses" class="row mb-1" v-bind:key="index">
                <div class="col-md-1">
                    <input v-model="selectedStatus" name="status" type="radio" v-bind:value="status.name">
                </div>
                <div class="col-md-2">{{status.name}}</div>
                <div class="col-md-3">{{status.description}}</div>
                <div class="col-md-3">{{status.colorCode}}</div>
                <div class="col-md-3">{{status.icon}}</div>
            </div>
            <button @click="shareStatus" class="mt-3" type="button">Share status</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: "ShareStatus",
        data() {
            return {
                statuses: [
                    {
                        name: 'OK',
                        description: 'I am OK, I do not need help',
                        colorCode: 'Green',
                        icon: 'Icon'
                    },
                    {
                        name: 'Help',
                        description: 'I need help, but this is not a life threatening emergency',
                        colorCode: 'Yellow',
                        icon: 'Icon'
                    }
                ],
                selectedStatus: '',
                currentStatus: 'undefined',
            }
        },
        methods:{
            shareStatus(){
                // let vm = this;

            }
        }
    }
</script>

<style scoped>

</style>