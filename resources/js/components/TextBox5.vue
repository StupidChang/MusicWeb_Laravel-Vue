<template>
    <hr>
    <div class="row mt-5">
        <div class="col-xxl-2 col-md-4 col-sm-6">
            <div class="circle-wrapper fade-leftin-item ">
                <a href="https://www.facebook.com" target="_blank">
                    <img class="imgstyle" src="../../assets/317727_facebook_social media_social_icon.png" alt="Facebook">
                </a>
            </div>
        </div>
        <div class="col-xxl-2 col-md-4 col-sm-6">
            <div class="circle-wrapper fade-leftin-item">
                <a href="https://www.instagram.com" target="_blank">
                    <img class="imgstyle" src="../../assets/1298747_instagram_brand_logo_social media_icon.png" alt="">
                </a>
            </div>
        </div>
        <div class="col-xxl-2 col-md-4 col-sm-12">
            <div class="circle-wrapper fade-leftin-item">
                <a href="https://www.twitter.com" target="_blank">
                    <img class="imgstyle" src="../../assets/5296516_tweet_twitter_twitter logo_icon.png" alt="">
                </a>
            </div>
        </div>

        <div class="col-xxl-6 col-md-12 fade-in-item mx-sm-2 mx-xxl-0">
            <div class="d-flex flex-row-reverse TextStyle2" >
                <h1 class="">音樂工作者</h1>
            </div>

            <p class="TextStyle">相信音樂是靈魂的良藥。它能喚起我們內心深處的情感，讓我們在孤獨時找到陪伴，在悲傷時獲得慰藉。音樂具有治癒的力量，能讓我們重新振作，面對生活中的挑戰。無論是在歡笑還是淚水中，音樂都是我們的忠實伴侶。相信音樂，讓它帶領我們走過人生的每一段旅程，找到內心的平靜與幸福。</p>
        </div>
    </div>

  </template>

  <script>
  export default {
    name: 'TextBox5',
    components: {}
  }
  </script>

  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100..900&display=swap');
  @import url('https://cdn.jsdelivr.net/npm/@mdi/font/css/materialdesignicons.min.css');

  .TextStyle{
    font-size: 15px;
    box-shadow: 0 0 15px rgba(253, 255, 255, 0);
    background-color: rgba(255, 255, 255, 0);
    color: rgba(163, 163, 163, 0.89);
    font-family: "Microsoft JhengHei", "微軟雅黑", "generic-family";
    font-style:italic;
  }

  .TextStyle2{
    font-size: 20px;
    box-shadow: 0 0 15px rgba(253, 255, 255, 0);
    background-color: rgba(255, 255, 255, 0);
    color: rgba(219, 219, 219, 0.89);
    font-family: "Microsoft JhengHei", "微軟雅黑", "generic-family";
    font-weight:bold;
  }

  .fade-leftin-item {
    animation: leftIn 4s ease-in-out 0s 1;
  }

  .fade-in-item {
    animation: fade 3s ease-in-out 0s 1;
  }

  .circle-wrapper {
    position: relative;
    width: 150px;
    height: 150px;

    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px;
    box-shadow: 0 0 15px rgba(253, 255, 255, 0.5);
    background-color: rgba(255, 255, 255, 0.11);
  }

  .imgstyle {
    width: 100px;
    height: auto;
  }

  .circle-wrapper:first-child::before {
    display: none;
  }

  .circle-wrapper:last-child::after {
    display: none;
  }

  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes leftIn {
    from {
      transform: translate3d(-15%, 0, 0);
      opacity: 0;
    }
    to {
      transform: none;
      opacity: 1;
    }
  }
  </style>
