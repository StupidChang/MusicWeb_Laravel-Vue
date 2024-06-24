<template>
    <header class="row m-0 p-0 d-flex align-items-center justify-content-between">
        <div class="logo col-xxl-2 col-lg-6">
            <router-link class="nav-link rounded-2 logo-link" to="/Home"><img class="logo" src="../../assets/S__7184395.jpg" alt="logo"></router-link>
            <img src="../../assets/EOE工作室.png" alt="New Image" class="mx-5">
        </div>

        <nav class="navbar navbar-expand-xxl navbar-light nav col-8 mx-6 px-6">
            <div class=" justify-content-center">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mb-2 mb-xxl-0 w-100 d-flex justify-content-center flex-wrap">
                        <li class="nav-item mx-1">
                            <router-link class="nav-link rounded-2" to="/Home"><span>{{ isActiveRoute('/Home') ? '🌌 ' : '' }}首頁</span></router-link>
                        </li>
                        <li class="nav-item mx-1">
                            <router-link class="nav-link rounded-2" to="/Project"><span>{{ isActiveRoute('/Project') ? '🌌 ' : '' }}委託專案</span></router-link>
                        </li>
                        <li class="nav-item dropdown mx-1">
                            <router-link class="nav-link rounded-2" to="/Contact"><span>{{ isActiveRoute('/Contact') ? '🌌 ' : '' }}聯繫我</span></router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <!-- <div class="nav" :class="{ 'nav-hidden': !navVisible }">
            <router-link class="router-link rounded-2" to="/Home"><span>{{ isActiveRoute('/Home') ? '🌌 ' : '' }}首頁</span></router-link>
            <router-link class="router-link rounded-2" to="/Project"><span>{{ isActiveRoute('/Project') ? '🌌 ' : '' }}委託專案</span></router-link>
            <router-link class="router-link rounded-2" to="/Contact"><span>{{ isActiveRoute('/Contact') ? '🌌 ' : '' }}聯繫我</span></router-link>
        </div>-->


        <div class="Links col-xxl-2">
            <a href="https://www.youtube.com/@user-qj6oi4rx7v"><img class="YT" src="../../assets/youtube.png" alt="Youtube"></a>
            <a href=""><img class="Twitter" src="../../assets/twitter.png" alt="Twitter"></a>
        </div>

    </header>
</template>

<script>
export default {
  name: 'main-header',
  data() {
    return {
      navVisible: false
    };
  },
  methods: {
    isActiveRoute(routePath) {
      return this.$route.path === routePath;
    },
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


.nav-link-active:not(.logo-link) {
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
    height: 7vh;
    display: flex;
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
  width: auto;
  display: flex;
  justify-content: center;
}

.navbar-nav {
  display: flex;
  justify-content: center;
  width: 100%;
}

.nav-link:not(.logo-link) {
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
.nav-link span {
    position: relative;
    z-index: 100;
}
.nav-link:before:not(.logo-link),
.nav-link:after:not(.logo-link) {
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
}
.nav-link:before:not(.logo-link) {
    transform: translate3d(-100%, 0, 0);
    background-color: #FFFFFF;
    transition: transform 300ms cubic-bezier(0.55, 0.055, 0.675, 0.19);
}
.nav-link:after:not(.logo-link) {
    background-color: #ffd1d8;
    transform: translate3d(100%, 0, 0);
    transition: transform 300ms 300ms cubic-bezier(0.16, 0.73, 0.58, 0.62);
}
.nav-link:hover:before:not(.logo-link) {
    transform: translate3d(0, 0, 0);
}
.nav-link:hover:after:not(.logo-link) {
    transform: translate3d(0, 0, 0);
}


/* 隱藏 Links 當視窗寬度小於 1400px */
@media (max-width: 982px) {
    .Links {
        display: none;
    }

    .navbar-expand-xxl .navbar-toggler {
        display: block;
    }

    .navbar-expand-xxl .navbar-collapse {
        display: none !important;
    }

    .navbar-collapse .nav-item {
        margin: 5px; /* 添加外邊距以擴大背景區域 */
    }

    .navbar-collapse .nav-link {
        padding: 15px 5px; /* 添加內邊距以擴大背景區域 */
        background-color: #ffffffb4; /* 確保背景顏色填充整個區域 */
        border-radius: 5px; /* 可選：添加圓角 */
    }

    .navbar-expand-xxl .navbar-collapse.collapse.show {
        display: flex !important;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        position: absolute;
        top: 100%;
        left: 10px; /* 調整左邊距 */
        right: 10px; /* 調整右邊距 */
        width: calc(100% - 20px); /* 調整寬度以確保兩邊有空間 */
        z-index: 1;
    }
}

@media (min-width: 982px) {
    .navbar-expand-xxl .navbar-toggler {
        display: none;
    }

    .navbar-expand-xxl .navbar-collapse {
        display: flex !important;
    }

    .nav{
        width: auto;
    }
}
</style>
