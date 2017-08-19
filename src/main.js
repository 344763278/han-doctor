// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import './assets/css/reset.css'
import './assets/css/font-awesome.css' 


// swiper引入出现问题
// import './assets/swiper/swiper.css' 
// import swiperJs from './assets/swiper/swiper.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
