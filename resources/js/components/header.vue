<template>
    <header class="row m-0 p-0 d-flex align-items-center justify-content-between ">
        <div class="col-xxl-2 col-lg-6 col-md-5 col-sm-3 ">
            <div class="row align-items-center justify-content-start">
                <router-link class="nav-link rounded-2 col-xxl-4 col-xl-3 col-lg-3 col-md-3 col-sm-6 align-items-center d-flex justify-content-center" to="/Home"><img class="logo" src="../../assets/S__7184395.jpg" alt="logo"></router-link>
                <div class="col-xxl-8 col-xl-9 col-lg-9 d-none d-lg-block"><img class="EOE" src="../../assets/EOE工作室.png" alt="New Image"></div>
            </div>
        </div>

        <nav class="navbar navbar-expand-md navbar-light nav col-xxl-8 col-lg-6 col-md-7 col-sm-9 ">
            <div class="container-fluid d-flex justify-content-end">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="">
                    <ul class="navbar-nav mb-2 mb-xxl-0 w-100 d-flex justify-content-center flex-wrap">
                        <li class="nav-item mx-1">
                            <router-link class="nav-link rounded-2" to="/Home"><span>{{ isActiveRoute('/Home') ? '🌌 ' : '' }}首頁</span></router-link>
                        </li>
                        <li class="nav-item mx-1">
                            <router-link class="nav-link rounded-2" to="/Project"><span>{{ isActiveRoute('/Project') ? '🌌 ' : '' }}委託專案</span></router-link>
                        </li>
                        <li class="nav-item mx-1">
                            <router-link class="nav-link rounded-2" to="/Contact"><span>{{ isActiveRoute('/Contact') ? '🌌 ' : '' }}聯繫我</span></router-link>
                        </li>
                        <li class="nav-item mx-1">
                            <router-link class="nav-link rounded-2" to="/Administrator"><span>{{ isActiveRoute('/Administrator') ? '🌌 ' : '' }}管理頁</span></router-link>
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

        <div class="Links col-xxl-2 d-none d-xxl-block ">
            <a href="https://www.youtube.com/@user-qj6oi4rx7v"><img class="YT" src="../../assets/youtube.png" alt="Youtube"></a>
            <a href=""><img class="Twitter" src="../../assets/twitter.png" alt="Twitter"></a>
        </div>

        <div class="collapse navbar-collapse collapseBackgroud" id="navbarSupportedContent">
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

.collapseBackgroud{
    background-color: rgb(255, 216, 255);
    z-index: 1000;
    font-size: medium;
}

.EOE{
    max-width: 300px;
    max-height: 200px;
}

.logo{
    height: 7vh;
    width: auto;
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
  display: flex;
  justify-content: center;
}

.nav-item:not(.logo-link) {
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
.nav-item span {
    position: relative;
    font-weight: bold;
    z-index: 100;
}
.nav-item:before:not(.logo-link),
.nav-item:after:not(.logo-link) {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
}
.nav-item:before {
    transform: translate3d(-100%, 0, 0);
    background-color: #FFFFFF;
    transition: transform 300ms cubic-bezier(0.55, 0.055, 0.675, 0.19);
}
.nav-item:after {
    background-color: #e88dff;
    transform: translate3d(100%, 0, 0);
    transition: transform 300ms 300ms cubic-bezier(0.16, 0.73, 0.58, 0.62);
}

/* 隱藏 Links 當視窗寬度小於 1400px */
@media (max-width: 1400px) {

}

@media (min-width: 992px) {

}
</style>
