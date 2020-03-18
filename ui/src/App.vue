<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<style lang="scss">
    @import "src/assets/colors";

    #app {

    }

    .swal2-popup {
        &.swal2-toast {
            background-color: $secondary-1 !important;
            .swal2-icon {

            }

            .swal2-content {
                //color: $secondary !important;
                margin-left: 4px;
            }
        }
    }
</style>
