<template> 
  <div class="wrap w">
    <h3>重装系统，从韩博士开始</h3>
    <h5>我们精选每一款软件，确保安全可靠，让您放心下载</h5>
    <ul class="clear">
      <li>
        <img src="static/product/2-1.png" height="84" width="84" alt="product">
        <p>Windows XP</p>
      </li>
      <li>
        <img src="static/product/2-2.png" height="84" width="84" alt="product">
        <p>Windows XP</p>
      </li>
      <li>
        <img src="static/product/2-3.png" height="84" width="84" alt="product">
        <p>Windows XP</p>
      </li>
      <li>
        <img src="static/product/2-4.png" height="84" width="84" alt="product">
        <p>Windows XP</p>
      </li>
      <li>
        <img src="static/product/2-5.png" height="84" width="84" alt="product">
        <p>Windows XP</p>
      </li>
      <li>
        <img src="static/product/2-6.png" height="84" width="84" alt="product">
        <p>Windows XP</p>
      </li>
      <li>
        <img src="static/product/2-7.png" height="84" width="84" alt="product">
        <p>Windows XP</p>
      </li>
      <li>
        <img src="static/product/2-8.png" height="84" width="84" alt="product">
        <p>Windows XP</p>
      </li>
    </ul>
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
    padding: 80px 0; 
  }
  h3{
    color: #333;
    font-size: 30px;
    font-weight: normal;
    text-align: center;
  }
  h5{
    color: #808080;
    font-size: 16px;
    font-weight: normal;
    text-align: center;
    margin-bottom: 30px;
  }
  ul{
    width: 100%;
    padding-left: 10px;

  }
  ul li{
    width: 285px;
    height: 200px;
    border: 1px solid #c7c7c7;
    margin-right: 10px;
    margin-bottom: 10px;
    float: left;
    cursor: pointer;
    background: #eee;
    text-align: center;
    transition: all 1s;

  }
  ul li img{
    margin: 30px 0 10px 0;
    transition: all 1s;
  }
  ul li p{ 
    color: #a6a6a6;
    font-size: 18px;
  }
  ul li:hover img{
    transform: scale(1.3, 1.3);
  }
  ul li:hover{
    background-color: #fff;
  }
</style>
