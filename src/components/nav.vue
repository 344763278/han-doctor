<template> 
  <div class="wrap">
    <div class="nav w">
      <div class="log"><a href="#"></a></div>
      <ul class="nav-items">
        <li class="list"><a href="#">首页<i class="fa fa-home"></i></a></li class="list">
        <li class="list"><a href="#">U盘启动</a></li class="list">
        <li class="list"><a href="#">在线安装</a></li class="list">
        <li class="list"><a href="#">一键备份</a></li class="list">
        <li class="list"><a href="#">系统下载</a></li class="list">
        <li class="list"><a href="#">疑难解答</i></a></li class="list">
      </ul>
    </div>
  </div> 
</template>


<script> 
import util from '../assets/js/util.js'
export default { 
  data () {
    return {  
    }
  },
  mounted(){ 

  }
}
</script>
 
<style scoped>
  .wrap{
    background-color: #274753;
  }
  .nav{
    height: 80px;
    overflow: hidden;
  }
  .log{
    width: 226px;
    height: 62px;
    margin-top: 9px;
    margin-right: 90px;
    background: url(../../static/nav/logo.png) 0 0 no-repeat;
    float: left; 
  }
  .log a{
    width: 100%;
    height: 100%;
    display: block;
  }
  .nav-items{
    float: left; 
  }
  .list{ 
    float: left;
    width: 105px;
    height: 80px;
    text-align: center;
    line-height: 80px;
    font-size: 18px;
  }
  .list a{
    display: inline-block;
    width: 100%;
    height: 100%;
  }
  .list a:hover{
    color: #fff;
    border-top: 2px #0AA522 solid;
    line-height: 78px;
  }
  .list.active{
    border-top: 2px #0AA522 solid;
    line-height: 78px;
  }
</style>
