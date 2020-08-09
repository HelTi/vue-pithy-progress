<template>
  <div class="circle-progress-wrapper">
    <div class="circle-progress">
      <svg :width="2 * r + (strokeWidth * 3) / 2" :height="r">
        <circle
          :style="leftCircleStyle"
          class="left"
          :cx="r"
          :cy="r"
          :r="r"
        ></circle>
        <circle
          class="right"
          :style="rotateStyle"
          :cx="r"
          :cy="r"
          :r="r"
        ></circle>
      </svg>
      <!-- 内容 -->
      <div class="progress-content">
        <slot>
          text
        </slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "svg-circle-progress",
  data() {
    return {};
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
    }
  },
  computed: {
    leftCircleStyle() {
      return {
        "stroke-width": this.strokeWidth
      };
    },
    rotateStyle() {
      let l = 2 * Math.PI * this.r;
      console.log(l);
      let rotate = l - (l * this.percentage) / 2 / 100 - l / 2;
      console.log("rotate111", rotate);
      return {
        "stroke-dashoffset": rotate,
        "stroke-dasharray": l,
        "stroke-width": this.strokeWidth
      };
    }
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.circle-progress-wrapper {
  .circle-progress {
    position: relative;
    display: flex;
    // align-items: center;
    justify-content: center;
    // height: 70px;
    // overflow: hidden;

    svg circle {
      // width: 150px;
      // height: 150px;
      fill: none;
      stroke-width: 10;
      stroke: #000;
      transform: translate(5px, 5px);
      // stroke-dasharray: 440;
      // stroke-dashoffset: 440;
      stroke-linecap: round;
    }

    .left {
      stroke-dashoffset: 0;
      stroke: #ffcaca;
    }

    .right {
      stroke-dashoffset: 0;
      stroke-dasharray: 440;
      stroke: #e57d4b;
      transition: all 0.3s ease-in;
    }

    .progress-content {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }
}
</style>
