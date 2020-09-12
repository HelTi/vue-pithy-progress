<template>
  <div class="a-circle-progress-wrapper">
    <div class="circle-progress">
      <svg :viewBox="viewBox" :width="2 * r + strokeWidth">
        <path
          :fill="bgColor"
          :stroke-width="6"
          :stroke-linecap="strokeLinecap"
          :stroke="strokeBgColor"
          :d="pathD"
        />
        <path
          class="circle-progress"
          fill-opacity="0"
          :style="aboveCircleStyle"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke="strokeColor"
          :stroke-dasharray="dasharray"
          :stroke-dashoffset="dashoffset"
          :d="pathD"
        />
      </svg>
      <!-- 内容 -->
      <div class="progress-content">
        <slot>
          <div class="inner-default-percentage">
            {{ percentage }}<span class="percentage-symbol">%</span>
          </div>
        </slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'semi-circle-progress',
  data() {
    return {}
  },
  props: {
    percentage: {
      type: Number,
      default: 0
    },
    r: {
      type: Number,
      default: 80
    },
    strokeWidth: {
      type: Number,
      default: 6
    },
    bgColor: {
      type: String,
      default: '#ffffff'
    },
    strokeBgColor: {
      type: String,
      default: '#ffcaca'
    },
    strokeColor: {
      type: String,
      default: '#e57d4b'
    },
    strokeLinecap: {
      type: String,
      default: 'round'
    },
    duration: {
      type: Number,
      default: 0.3
    }
  },
  computed: {
    pathD() {
      let radius = this.r
      let d = `M${radius * 2} ${radius} A${radius} ${radius} 0 0 0 0 ${radius}`
      return d
    },
    viewBox() {
      let cx = this.strokeWidth / 2
      let cy = this.strokeWidth / 2
      let w = 2 * this.r + this.strokeWidth
      let h = this.r + this.strokeWidth
      return `-${cx} -${cy} ${w} ${h}`
    },
    leftCircleStyle() {
      return {
        'stroke-width': this.strokeWidth
      }
    },
    dasharray() {
      let l = (3.14 * 2 * this.r) / 2
      return `${l}`
    },
    dashoffset() {
      let offset =
        this.dasharray *
          ((this.percentage > 100 ? 100 : this.percentage) / 100) +
        (3.14 * 2 * this.r) / 2
      return `${offset}`
    },
    aboveCircleStyle() {
      return {
        transition: `all ${this.duration}s ease-in-out`
      }
    }
  },
  methods: {}
}
</script>

<style lang="scss">
.a-circle-progress-wrapper {
  .circle-progress {
    position: relative;
    display: flex;
    justify-content: center;

    .progress-content {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 50%;
      transform: translateX(-50%);

      .inner-default-percentage {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
      }
    }
  }
}
</style>
