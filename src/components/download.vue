<template> 
  <div class="wrap">
    <div class="img1"></div>
    <div class="img2"></div>
    <a href="javascript:" class="btn">立即下载</a>
  </div>
</template>

<script>
export default { 
  data () {
    return { 
    }
  }
}
</script>
 
<style scoped>
  .wrap{
    height: 460px;
    background: url(../../static/download/6-1.png) 0 0 no-repeat;
    background-size: 100% 100%;
    position: relative;
  }
  .img1{
    width: 448px;
    height: 88px;
    position: absolute;
    left: 80px;
    top: 190px;
    background: url(../../static/download/6-2.png) 0 0 no-repeat;

  }
  .img2{
    width: 591px;
    height: 400px;
    position: absolute;
    left: 674px;
    top: 40px;
    background: url(../../static/download/6-3.png) 0 0 no-repeat;
  }
  .btn{ 
    width: 160px;
    height: 50px;
    background-color: #fff;
    position: absolute;
    top: 280px;
    left: 220px;
    border-radius: 10px;
    color: #0AA522;
    font-size: 22px;
    line-height: 50px;
    text-align: center;
    text-decoration: none;
  }
</style>
