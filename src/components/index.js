import circleProgress from './circle-progress'
import simeCircleProgress from './semi-circle-progress'

const install = function(Vue) {
  let components = [circleProgress, simeCircleProgress]
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

export default {
  install: install
}
