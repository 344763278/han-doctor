<template>
  <div id="app"> 
    <Vnav></Vnav>
    <banner></banner>
    <micro></micro>
    <product></product>
    <chooseUs></chooseUs>


    <Vfooter></Vfooter>
  </div>
</template>

<script>
import Vnav      from './components/nav'
import banner    from './components/banner'
import micro     from './components/mocroInfo'
import product   from './components/product'
import chooseUs  from './components/chooseUs'


import Vfooter   from './components/footer'




export default { 
  components: {
    Vnav,
    banner,
    micro,
    product,
    chooseUs,
    Vfooter
  }
}
</script>

<style> 
@import './assets/reset.css'
</style>
