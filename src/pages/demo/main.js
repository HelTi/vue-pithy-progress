import Vue from 'vue'
import App from './App.vue'

// import AwSomeProgress from '@/components/index.js'

// Vue.use(AwSomeProgress)

import CircleProgress from '@/components/circle-progress'
Vue.use(CircleProgress)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
