import SemiCircleProgress from './semi-circle-progress.vue'

function install(Vue) {
  Vue.component(SemiCircleProgress.name, SemiCircleProgress)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export default {
  install: install
}
