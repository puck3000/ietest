import Vue from 'vue'
import Components from './components'
import VueMq from 'vue-mq'
import './styles/hamburgers.css'
// import { MdField, MdInput } from 'vue-material/dist/components'
// import 'vue-material/dist/vue-material.min.css'
import VueParallaxJs from 'vue-parallax-js'
import 'lazysizes'

Vue.use(VueParallaxJs)
// Vue.use(MdField)
// Vue.use(MdInput)


Vue.config.productionTip = false

//Vue.use(VueMaterial)
Vue.use(VueMq, {
  breakpoints: {
    mobile: 450,
    tablet: 768,
    laptop: 1080,
    desktop: 1600,
    xxldesktop: Infinity
  }
})

new Vue({
  el: '#app',
  delimiters: ['${', '}']
})