import Vue from 'vue'
import App from './App.vue'

import VuePithyProgress from '@/components/index.js'

Vue.use(VuePithyProgress)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
