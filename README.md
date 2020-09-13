# vue-awsome-progress

Progress bar component for Vue.js(2.x). This project contains three common components（circle-progress、semi-circle-progres、progress-bar）uses SVG to show progress.

<a href="#">
<img width="500" src="https://s1.ax1x.com/2020/09/13/w018bR.png" />
</a>

English|[中文](./README_CN.md)
## Installation
```bash
npm install vue-awesome-progress
```

## Usage
### Global registration
```bash
import AweSomeProgress from 'vue-awesome-progress'
Vue.use(AweSomeProgress)

<circle-progress :percentage="percentage"> </circle-progress>

<semi-circle-progress :percentage="percentage" />

<progress-bar :percentage="percentage" />

```
### Use single component
```bash
import semiCircleProgress from 'vue-awesome-progress/lib/semi-circle-progress.umd.min.js'
import 'vue-awesome-progress/lib/semi-circle-progress.css'

<semi-circle-progress :percentage="percentage" />

export default {
  name: 'App',
  data() {
    return {
      percentage: 10
    }
  },
  components: { semiCircleProgress }
}

```
## demo
```js
<template>
  <div id="app">
    <div class="con">
      <circle-progress :percentage="percentage"> </circle-progress>
    </div>
    <div style="margin-top:10px;">
      <semi-circle-progress :percentage="percentage" />
    </div>
    <div style="width:220px; margin-top:60px;">
      <progress-bar :percentage="percentage" />
    </div>

    <div class="btn-wrapper" style="margin-top:10px;">
      <button @click="changeProgrss">increase</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      percentage: 10
    }
  },
  methods: {
    changeProgrss() {
      this.percentage += 10
    }
  }
}
</script>

```
## circle-progress
### props
|  Name   | Default value  |  Type  |  Description  |
|  ----  | ----  | ----  | ----  |
| percentage  | 0 | Number | Rate of progress. |
| r  | 50 | Number | Radius of circle. |
| stroke-width  | 5 | Number | The width of the progress bar. |
| bg-color  | #ffffff | String | The background color of the circle.|
| stroke-bg-color  | #ffcaca | String | The background color of the progress bar. |
| stroke-color  | #e57d4b | String | The color of progress bar. |
| stroke-linecap  | round | String | The type of stroke linecap for circle.(sqaure butt round) |
| duration  | 0.3 | Number | Transition time for progress changes. |

### slots
|  Name   | Description  |
|  ----  | ----  |
| default  | custom text content. |

## semi-circle-progress
### props
|  Name   | Default value  |  Type  |  Description  |
|  ----  | ----  | ----  | ----  |
| percentage  | 0 | Number | Rate of progress. |
| r  | 50 | Number | Radius of circle. |
| stroke-width  | 5 | Number | The width of the progress bar. |
| bg-color  | #ffffff | String | The background color of the circle.|
| stroke-bg-color  | #ffcaca | String  | The background color of the progress bar. |
| stroke-color  | #e57d4b | String | The color of progress bar. |
| stroke-linecap  | round | String | The type of stroke linecap for circle.(sqaure butt round) |
| duration  | 0.3 | Number | Transition time for progress changes. |

### slots
|  Name   | Description  |
|  ----  | ----  |
| default  | custom text content. |

## progress-abr
### props
|  Name   | Default value  |  Type  |  Description  |
|  ----  | ----  | ----  | ----  |
| percentage  | 0 | Number | Rate of progress. |
| height  | 8 | Number | Height of progress bar. |
| unit  | px | String | The css pixel unit. |
| width  | 100% | String | The width of progress bar.|
| bg-color  | #ffcaca | String  | The background color of the progress bar. |
| color  | #e57d4b | String | The font color of progress bar. |
| show-top-tip  | true | Boolean |  Show top tips of progress bar. |
| tip-bg-color  | #ffcaca | String | Background color of top tips. |
| tip-font-color  | #ff445a | String | Font color of top tips. |

### slots
|  Name   | Description  |
|  ----  | ----  |
| default  | custom text content(Top tip). |

## Dev
```bash
npm install
npm run serve
```
## build
```bash
npm run build
```
## License
[MIT](./LICENSE)



