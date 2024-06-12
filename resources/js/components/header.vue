<template>
    <header>
        <div class="logo">
            <router-link class="router-link rounded-2 logo-link" to="/Home" ><img class="logo" src="../../assets/S__7184395.jpg" alt="logo"></router-link>
        </div>

        <div class="nav">
            <router-link class="router-link rounded-2 " to="/Home" ><span>{{ isActiveRoute('/Home') ? '🌌 ' : '' }}首頁</span></router-link>
            <router-link class="router-link rounded-2 " to="/Project"><span>{{ isActiveRoute('/Project') ? '🌌 ' : '' }}委託專案</span></router-link>
            <router-link class="router-link rounded-2 " to="/Contact"><span>{{ isActiveRoute('/Contact') ? '🌌 ' : '' }}聯繫我</span></router-link>
        </div>

        <div class="Links">
            <a href="https://www.youtube.com/@user-qj6oi4rx7v"><img class="YT" src="../../assets/youtube.png" alt="Youtube"></a>
            <a href=""><img class="Twitter" src="../../assets/twitter.png" alt="Twitter"></a>
        </div>
    </header>
</template>

<script>
export default {
  name: 'main-header',
  methods: {
    isActiveRoute(routePath) {
      return this.$route.path === routePath;
    }
  }
}
</script>

<style scoped>
@font-face {
  font-family: "源雲明體";
    src:url('../../font/GenWanMinTWSemiBold.ttf')format("truetype"),
        url('../../font/GenWanMinTWSemiBold.woff')format("woff"),
        url('../../font/GenWanMinTWSemiBold.eot')format("eot");
}

.router-link-active:not(.logo-link) {
    color: #cd98ff;  /* 修改為您希望的顏色或樣式 */
    font-weight: bold;
}

header{
    position: relative;
    /*font-family: "源雲明體";*/
    height: 9vh;
    width: auto;
    background: #d7dbdb81;
    padding: 1% 2%;
    display:flex;
    justify-content: space-between;
    align-items: center;
    background-image: url("../../assets/IMG_5900.png");
    background-position: center center; /* 使背景圖片居中 */
    background-repeat: no-repeat; /* 避免背景圖片重複 */
    background-size: cover; /* 背景圖片覆蓋整個元素，保持比例 */
    background-attachment: fixed;
}

.logo{
    width: 100%;
    height: 7vh;
    display:flex;
    border-radius: 50%;
    justify-content: flex-start;
}

.fontstyle{
  color: #364246;
  font-weight: bold;
  font-size: 18px;
  text-decoration: none;
}

.Links{
  width: 173px;
  display: flex;
  justify-content: space-between;
}

.YT{
  width: 68px;
  padding-right: 10px;
}

.Twitter{
  width: 55px;
}

.nav{
  width: 50%;
  display: flex;
  justify-content: space-between;
  padding: 1% 10% 1% 1%;
}

.router-link:not(.logo-link) {
    color: #364246;
    font-weight: bold;
    font-size: 18px;
    text-decoration: none;
    position: relative;
    min-width: 10vh;
    text-align: center;
    text-transform: uppercase;
    overflow: hidden;
    padding: 10px 20px;
}
.router-link span {
    position: relative;
    z-index: 100;
}
.router-link:before:not(.logo-link),
.router-link:after:not(.logo-link) {
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
}
.router-link:before:not(.logo-link) {
    transform: translate3d(-100%, 0, 0);
    background-color: #FFFFFF;
    transition: transform 300ms cubic-bezier(0.55, 0.055, 0.675, 0.19);
}
.router-link:after:not(.logo-link) {
    background-color: #ffd1d8;
    transform: translate3d(100%, 0, 0);
    transition: transform 300ms 300ms cubic-bezier(0.16, 0.73, 0.58, 0.62);
}
.router-link:hover:before:not(.logo-link) {
    transform: translate3d(0, 0, 0);
}
.router-link:hover:after:not(.logo-link) {
    transform: translate3d(0, 0, 0);
}

</style>
