<template>
  <div class="circle-progress-wrapper">
    <div class="circle-progress">
      <svg
        class="circle-progress-bar"
        :width="2 * r + strokeWidth"
        :viewBox="viewBox"
        :height="2 * r + strokeWidth"
      >
        <!-- #ffcaca -->
        <circle
          :cx="r"
          :cy="r"
          :r="r"
          :stroke="strokeBgColor"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          fill="none"
        />
        <circle
          :cx="r"
          :cy="r"
          :r="r"
          :style="aboveCircleStyle"
          :stroke="strokeColor"
          :stroke-dasharray="dasharray"
          :stroke-width="strokeWidth"
          :stroke-dashoffset="dashoffset"
          :stroke-linecap="strokeLinecap"
          fill="none"
        />
      </svg>
      <!-- 内容 -->
      <div class="progress-content">
        <slot>
          <div class="percent-text">{{ percentage }} %</div>
        </slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'svg-circle-progress',
  data() {
    return {}
  },
  props: {
    percentage: {
      type: Number,
      default: 10
    },
    r: {
      type: Number,
      default: 50
    },
    strokeWidth: {
      type: Number,
      default: 5
    },
    bgColor: {
      type: String,
      default: '#ffcaca'
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
    viewBox() {
      let cx = this.strokeWidth / 2
      let cy = this.strokeWidth / 2
      let w = 2 * this.r + this.strokeWidth
      let h = w
      return `-${cx} -${cy} ${w} ${h}`
    },
    dasharray() {
      let l = 3.14 * 2 * this.r
      return `${l}`
    },
    dashoffset() {
      let offset = this.dasharray * (this.percentage / 100) + 3.14 * this.r * 2
      return `${-offset}`
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

<style lang="scss" scoped>
.circle-progress-wrapper {
  .circle-progress {
    position: relative;
    display: flex;
    justify-content: center;

    .circle-progress-bar {
      transform: rotate(-90deg);
    }

    .progress-content {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);

      .percent-text {
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
}
</style>
