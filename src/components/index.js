import circleProgress from './circle-progress'
import semiCircleProgress from './semi-circle-progress'
import progressBar from './progress-bar'

const install = function(Vue) {
  let components = [circleProgress, semiCircleProgress, progressBar]
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
