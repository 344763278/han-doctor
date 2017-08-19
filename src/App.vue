<template>
  <div id="app"> 
    <Vnav></Vnav>
    <banner></banner>
  </div>
</template>

<script>
import Vnav   from './components/nav'
import banner from './components/banner'

export default { 
  components: {
    Vnav,
    banner
  }
}
</script>

<style> 
@import './assets/reset.css'
</style>
