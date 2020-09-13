# vue-awsome-progress
基于vue.js(2.x)的进度组件，包含三种常见的进度展示（圆环进度、半圆进度、普通进度条），使用SVG展示组件。

<a href="#">
<img width="500" src="https://s1.ax1x.com/2020/09/13/w018bR.png" />
</a>

 [English](./README.md)|中文
## 安装
```bash
npm install vue-pithy-progress
```

## 使用
### 全局注册
```bash
import VuePithyProgress from 'vue-pithy-progress'
Vue.use(VuePithyProgress)

<circle-progress :percentage="percentage"> </circle-progress>

<semi-circle-progress :percentage="percentage" />

<progress-bar :percentage="percentage" />

```
### 引入单个组件
```bash
import semiCircleProgress from 'vue-pithy-progress/lib/semi-circle-progress.umd.min.js'
import 'vue-pithy-progress/lib/semi-circle-progress.css'

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
|  属性名称   | 默认值  |  类型  |  描述  |
|  ----  | ----  | ----  | ----  |
| percentage  | 0 | Number | 进度. |
| r  | 50 | Number | 半径. |
| stroke-width  | 5 | Number | 进度条的宽. |
| bg-color  | #ffffff | String | 圆的背景颜色.|
| stroke-bg-color  | #ffcaca | String | 进度条的背景颜色. |
| stroke-color  | #e57d4b | String | 进度条颜色. |
| stroke-linecap  | round | String | 进度条的闭环形式 |
| duration  | 0.3 | Number | css动画过度时间. |

### slots
|  名称   | 描述  |
|  ----  | ----  |
| default  | 默认插槽. |

## semi-circle-progress
### props
|  属性名称   | 默认值  |  类型  |  描述  |
|  ----  | ----  | ----  | ----  |
| percentage  | 0 | Number | 进度. |
| r  | 50 | Number | 半径. |
| stroke-width  | 5 | Number | 进度条的宽. |
| bg-color  | #ffffff | String | 圆的背景颜色.|
| stroke-bg-color  | #ffcaca | String | 进度条的背景颜色. |
| stroke-color  | #e57d4b | String | 进度条颜色. |
| stroke-linecap  | round | String | 进度条的闭环形式 |
| duration  | 0.3 | Number | css动画过度时间. |

### slots
|  名称   | 描述  |
|  ----  | ----  |
| default  | 默认插槽. |

## progress-abr
### props
|  属性名称   | 默认值  |  类型  |  描述  |
|  ----  | ----  | ----  | ----  |
| percentage  | 0 | Number | 进度. |
| height  | 8 | Number | 进度条高度. |
| unit  | px | String | css单位. |
| width  | 100% | String | 进度条宽度.|
| bg-color  | #ffcaca | String  | 进度条的背景颜色. |
| color  | #e57d4b | String | 进度条字体颜色. |
| show-top-tip  | true | Boolean |  是否展示进度条顶部提示. |
| tip-bg-color  | #ffcaca | String | 顶部提示背景颜色. |
| tip-font-color  | #ff445a | String | 顶部提示字体颜色. |

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



