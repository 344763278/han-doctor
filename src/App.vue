<template>
  <div id="app"> 
    <Vnav></Vnav> 
    <banner></banner>  
    <micro></micro>
    <product></product>
    <chooseUs></chooseUs>
    <functions></functions>
    <various></various>
    <download></download> 
    <test></test>
    <Vfooter></Vfooter> 
  </div>
</template>

<script>
import Vnav      from './components/nav'  
import banner    from './components/banner'
import micro     from './components/mocroInfo'
import product   from './components/product'
import chooseUs  from './components/chooseUs'
import functions from './components/function'
import various   from './components/various'
import download  from './components/download' 
import test      from './components/test'
import Vfooter   from './components/footer'  


export default { 
  components: {
    Vnav,
    banner,
    micro,
    product,
    chooseUs,
    Vfooter,
    functions,
    various,
    download,
    test
  }
}
</script>

<style rel="stylesheet/less" lang="less">
@import './assets/css/test.less';
</style>
