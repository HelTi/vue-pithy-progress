# vue-awsome-progress
vue圆形进度组件(circle-progress)、半圆进度组件(semi-circle-progress)、普通进度条组件(progress-abr)。

## Installation
```bash
npm install vue-awesome-progress
```

## Usage
```bash
import AweSomeProgress from 'vue-awesome-progress'
Vue.use(AweSomeProgress)

<circle-progress :percentage="percentage"> </circle-progress>

<semi-circle-progress :percentage="percentage" />

<progress-bar :percentage="percentage" />

```

## circle-progress
### props
|  Name   | Default value  |  Type  |  Description  |
|  ----  | ----  | ----  | ----  |
| percentage  | 0 | Number | Rate of progress. |
| r  | 50 | Number | Radius of circle. |
| strokeWidth  | 5 | Number | The width of the progress bar. |

## semi-circle-progress

## progress-abr


