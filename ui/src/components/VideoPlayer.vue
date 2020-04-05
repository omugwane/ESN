<template>
    <div>
        <video ref="videoPlayer" class="video-js"/>
    </div>
</template>

<script>
    import videojs from 'video.js'

    export default {
        name: "VideoPlayer",
        props: {
            options: {
                type: Object,
                default() {
                    return {}
                }
            },
        },
        mounted() {
            this.player = videojs(this.$refs.videoPlayer, this.options, function onPlayerReady() {
                // console.log('onPlayerReady', this);
            })
        },
        beforeDestroy() {
            if (this.player) {
                this.player.dispose()
            }
        },
        data() {
            return {
                player: null
            }
        },
        methods: {}
    }
</script>

<style scoped lang="scss">
    @import "~video.js/dist/video-js.min.css";
</style>