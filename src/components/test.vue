<template> 
  <div class="wrap">
    <h3 class="lg ">我的来测试less的</h3>
    <p>
      <span>
        我是less来测试的ppppp
      </span>
      <del>可以删除这个组件</del>
    </p> 
  </div>
</template>


<script>  
export default { 
  data () {
    return {  
    }
  },
  mounted(){ 

  }
}
</script>
 
<style scoped lang="less">
@import '../assets/css/test.less';
  .wrap{
    .border-1px(yellow); 
    .bg-image('/function/con1'); 
    background-position: 800px 0;
    background-repeat: no-repeat;
    padding: 50px 0;  
    p{
      span{
        display: inline-block;
        width: 100%;
        height: 20px;
        line-height: 20px;
        font-size: 16px;
        color: #f60;
        text-align: center;
      }
      del{
        display: inline-block;
        width: 100%;
        font-size: 20px;
        color: red;
        text-align: center;
      }
    }
  }
</style>
