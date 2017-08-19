<template> 
  <div class="wrap">
    <div class="various w">
      <h3>管理自如   安全可靠</h3>
      <h5>韩博士功能多样化，满足各用户需求，让装机变的不在困难。</h5>
      <ul class="ul clear">
        <li class="li">
          <div class="imgs-1"></div>
          <span>U盘启动盘制作</span>
        </li>
        <li class="li">
          <div class="imgs-1 imgs-2"></div>
          <span>U盘装XP系统</span>
        </li>
        <li class="li">
          <div class="imgs-1 imgs-3"></div>
          <span>U盘装Win7系统</span>
        </li>
        <li class="li">
          <div class="imgs-1 imgs-4"></div>
          <span>U盘装Win8系统</span>
        </li>
        <li class="li">
          <div class="imgs-1 imgs-5"></div>
          <span>U盘装Win10系统</span>
        </li>
        <li class="li">
          <div class="imgs-1 imgs-6"></div>
          <span>系统备份还原</span>
        </li>
      </ul>
    </div>
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
    background-color: #F4F4F4;
    padding: 50px 0;
  }
  .ul{
    margin-right: -80px;
    margin-top: 40px;
  }
  .ul .li{
    width: 134px; 
    padding: 20px 0;
    float: left;
    border: 1px solid #ccc;
    margin-right: 77px;
    cursor: pointer;
  }
  .various h3{
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 30px;
    font-weight: normal;
    color: #333369;
  }
  .various h5{
    height: 30px;
    line-height: 30px;
    text-align: center;
    font-size: 20px;
    font-weight: normal;
    color: #808080;
  }
  .imgs-1{
    width: 134px;
    height: 79px; 
    background: url(../../static/various/5-1.png) 0 -94px no-repeat;
    transition: all 1s;
  }
  .imgs-2{
    background: url(../../static/various/5-2.png) 0 -94px no-repeat;
  }
  .imgs-3{
    background: url(../../static/various/5-3.png) 0 -94px no-repeat;
  }
  .imgs-4{
    background: url(../../static/various/5-4.png) 0 -94px no-repeat;
  }
  .imgs-5{
    background: url(../../static/various/5-5.png) 0 -94px no-repeat;
  }
  .imgs-6{
    background: url(../../static/various/5-6.png) 0 -94px no-repeat;
  }
  .imgs-1:hover,.imgs-2:hover,.imgs-3:hover,.imgs-4:hover,.imgs-5:hover,.imgs-6:hover{
    background-position: 0 -16px;
  }
  .li span{
    width: 100%;
    padding-top: 20px;
    display: inline-block;
    text-align: center;
    height: 20px;
    line-height: 20px;
    font-size: 14px; 
  }
</style>
