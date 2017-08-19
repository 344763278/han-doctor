<template> 
  <div class="wrap">
    <div class="function w">
      <h3>功能大全&nbsp;&nbsp;&nbsp;&nbsp;得心应手</h3>
      <div class="f1">
        <h4>纯净、纯粹</h4>
        <p>零广告、零打扰、零胁迫、原版纯净，极致体验！</p>
      </div>
      <div class="f1 f2">
        <h4>安全可靠</h4>
        <p>只需一键扫描！快速、全面地诊断系统安全状况 和健康程度，并进行精准修复！</p>
      </div>
      <div class="f1 f3">
        <h4>极速清理</h4>
        <p>超强特性，无可比拟</p>
      </div>
      <div class="f1 f4">
        <h4>省心无忧</h4>
        <p>操作省心，事半功倍</p>
      </div>
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
    background-color: #fff;
  }
  .function{
    padding: 50px 0; 
    position: relative;
    height: 300px;
  }
  .function h3{
    color: #333;
    font-size: 30px;
    font-weight: normal;
    text-align: center;
  }
  .f1{
    height: 80px;
    width: 400px;
    padding-left: 64px;
    background: url(../../static/function/con1.png) 0 0 no-repeat;
    position: absolute;
    top: 130px;
    left: 50px;
  }
  .f1 h4{
    font-size: 18px;
    color: #1a1a1a; 
    margin-left: 20px;
    margin-bottom: 5px;
    height: 30px;
    line-height: 30px; 
  }
  .f1 p{
    height: 20px;
    line-height: 20px;
    font-size: 14px;
    color: #666; 
    margin-left: 20px; 
  }
  .f2{
    position: absolute;
    top: 130px;
    left: 550px;
    background: url(../../static/function/con2.png) 0 0 no-repeat;
  }
  .f3{
    position: absolute;
    top: 250px;
    left: 180px;
    background: url(../../static/function/con3.png) 0 0 no-repeat;
  }
  .f4{
    position: absolute;
    top: 250px;
    left: 700px;
    background: url(../../static/function/con4.png) 0 0 no-repeat;
  }
</style>
