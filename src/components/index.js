import circleProgress from './circle-progress/circle-progress.vue'
import semiCircleProgress from './semi-circle-progress/semi-circle-progress.vue'

const install = function(Vue) {
  let components = [circleProgress, semiCircleProgress]
  components.forEach(function(item) {
    if (item.install) {
      Vue.use(item)
    } else if (item.name) {
      Vue.component(item.name, item)
    }
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export { circleProgress, semiCircleProgress }

export default {
  install: install
}
