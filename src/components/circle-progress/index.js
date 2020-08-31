import CircleProgress from './circle-progress'

function install(Vue) {
  Vue.component(CircleProgress.name, CircleProgress)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export default {
  install: install
}
