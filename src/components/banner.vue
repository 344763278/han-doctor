<template> 
<div class="root">
  <div class="banner w">
    <ul class="ul">
      <li class="li">
        <div class="download">
          <div class="down-img">
            <img src="../../static/banner/new-title2.png" height="210" width="464" alt="tit">
          </div>
          <p class="xunlei"><img src="../../static/banner/button-down-nor.png" height="60" width="180" alt=""></p>
          <p class="other"><a href="#">百度网盘下载</a>|<a href="#">本地下载</a><a href="#" class="teach">.查看软件教程</a></p>
        </div>
        <div class="img">
          <img src="../../static/banner/ban_01.png" height="450" width="726" alt="banner">
        </div>
      </li>
      <li class="li">
        <div class="download">
          <div class="down-img">
            <img src="../../static/banner/new-title2.png" height="210" width="464" alt="tit">
          </div>
          <p class="xunlei"><img src="../../static/banner/button-down-nor.png" height="60" width="180" alt=""></p>
          <p class="other"><a href="#">百度网盘下载</a>|<a href="#">本地下载</a><a href="#" class="teach">.查看软件教程</a></p>
        </div>
        <div class="img">
          <img src="../../static/banner/ban_02.png" height="450" width="726" alt="banner">
        </div>
      </li>
      <li class="li">
        <div class="download">
          <div class="down-img">
            <img src="../../static/banner/new-title2.png" height="210" width="464" alt="tit">
          </div>
          <p class="xunlei"><img src="../../static/banner/button-down-nor.png" height="60" width="180" alt=""></p>
          <p class="other"><a href="#">百度网盘下载</a>|<a href="#">本地下载</a><a href="#" class="teach">.查看软件教程</a></p>
        </div>
        <div class="img">
          <img src="../../static/banner/ban_03.png" height="450" width="726" alt="banner">
        </div>
      </li>
    </ul>
    <ul class="dot">
      <li  @click="tab(0)" class="active"></li>
      <li  @click="tab(1)"></li>
      <li  @click="tab(2)"></li>
    </ul>
  </div>
</div> 
</template>

<script>
export default { 
  data () {
    return { 
    }
  },
  methods: {
    tab(n){
      if($('.dot li').eq(n).hasClass('active'))return; 
      let ul      = $('.ul');
      let dotLi   = $('.dot li')
      let ulWidth = $('.ul').width();
      let liWidth = $('.li').eq(1).width();
      ul.animate({
        left : -liWidth*n
      },500);
      dotLi.eq(n).addClass('active').siblings().removeClass('active');
    } 
  }
}
</script>
 
<style scoped>
  .root{
    background: url(../../static/banner/banner-bg.jpg) 0 0 no-repeat;
    background-size: 100% 100%;
  }
  .banner{ 
    height: 500px;
    overflow: hidden;
    position: relative; 
  }
  .ul{
    width: 3600px;
    height: 500px;
    position: absolute;
    left: 0;
    top: 0;
  }
  .li{
    float: left;
    height: 500px;
    width: 1200px;
  }
  .li .download{
    float: left; 
  }
  .li .download .down-img{
    margin-top: 120px;
  }
  .xunlei{ 
    margin-left: 45px;

  }
  .other{
    padding: 20px 0 20px 45px;
    color: #fff;
  }
  .other a{
    margin: 0 10px;
    font-size: 14px; 
  }
  .other .teach{
    color: #FFFF00;
    display: inline-block;
    line-height: 14px;
    height: 14px;
  }
  .li .img{
    float: right;
  }
  .dot{
    width: 100%;
    height: 20px;
    position: absolute;
    left: 0;
    bottom: 10px; 
    text-align: center;
  }
  .dot li{
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin: 0 5px;
    background-color: #fff; 
  } 
  .dot li:hover{
    background-color: #76979E;
  }
  .dot li.active{
    background-color: #76979E;
  }
</style>
