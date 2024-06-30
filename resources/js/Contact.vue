<template>
    <mainheader></mainheader>
        <StarbackCanvas>
            <div class="container">
                <div class="row py-3">
                    <div class="col-12">
                        <polygonvideo video-src="../assets/FDownloader.net-366239529314160-(1080p).mp4"></polygonvideo>
                    </div>
                </div>
            </div>

            <div class="container">
                <div class="row py-3">
                    <div class="col-12">
                        <TextBox5></TextBox5>
                    </div>
                </div>
            </div>
        </StarbackCanvas>
    <mainfooter></mainfooter>
</template>

<script>
    import polygonvideo from './components/polygon-video.vue'
    import mainheader from './components/header.vue'
    import mainfooter from './components/footer.vue'
    import TextBox from './components/TextBox.vue'
    import StarbackCanvas from './components/StarbackCanvas.vue'
    import TextBox5 from './components/TextBox5.vue'

    export default {
        name: 'Contact',
        components: {
            polygonvideo,
            mainheader,
            mainfooter,
            TextBox,
            StarbackCanvas,
            TextBox5
        }
    }
</script>

<style>
    .imagestyle{
        clip-path: polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%);
    }

    .Notofont {
        font-family: "Noto Sans TC", sans-serif;
        font-optical-sizing: auto;
        font-weight: 600;
        font-style: normal;
        color: rgba(255, 255, 255, 0.829) !important;
    }

</style>
