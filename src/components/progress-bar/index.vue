<template>
  <div class="progress-bar-wrapper" :style="wrapperStyle">
    <div class="progress-outside" :style="outsideStyle">
      <div class="progress-inner" :style="innerBarStyle">
        <div class="progress-value">{{ percentage }}%</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'progress-bar',
  props: {
    percentage: {
      type: Number,
      default: 1
    },
    height: {
      type: Number,
      default: 8
    },
    unit: {
      type: String,
      default: 'px'
    },
    width: {
      type: String,
      default: '100%'
    }
  },
  computed: {
    innerBarStyle() {
      return {
        width: this.percentage + '%',
        height: this.height + this.unit,
        'border-radius': (this.height / 2).toFixed(2) + this.unit
      }
    },
    outsideStyle() {
      return {
        height: this.height + this.unit,
        'border-radius': (this.height / 2).toFixed(2) + this.unit
      }
    },
    wrapperStyle() {
      return {
        width: this.width
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.progress-bar-wrapper {
  position: relative;
  overflow: visible;
  font-size: 11px;
  .left-content {
    position: absolute;
    left: 0;
    bottom: -18px;
  }

  .right-content {
    position: absolute;
    right: 0;
    bottom: -18px;
  }

  .progress-outside {
    width: 100%;
    background: #ffcaca;
    position: relative;
    overflow: visible;
    // padding: 1px;

    .progress-inner {
      // background-image: linear-gradient(
      //   45deg,
      //   rgba(255, 255, 255, 0.15) 25%,
      //   transparent 25%,
      //   transparent 50%,
      //   rgba(255, 255, 255, 0.15) 50%,
      //   rgba(255, 255, 255, 0.15) 75%,
      //   transparent 75%,
      //   transparent
      // );
      background: #e57d4b;
      // background-size: 40px 40px;
      transition: all 0.3s ease-in;
      position: relative;

      // animation: progress-animation 12s infinite linear;

      .progress-value {
        display: block;
        width: 75px;
        height: 25px;
        line-height: 25px;
        border-radius: 12.5px;
        text-align: center;
        font-size: 13px;
        color: #fff;
        border-radius: 4px;
        background: #ffcaca;
        color: #ff445a;
        position: absolute;
        top: -40px;
        right: -18px;

        &::after {
          content: '';
          border-top: 10px solid #ffcaca;
          border-left: 10px solid transparent;
          border-right: 10px solid transparent;
          position: absolute;
          bottom: -6px;
          right: 16%;
        }
      }

      @keyframes progress-animation {
        from {
          background-position-x: 0px;
        }
        to {
          background-position-x: 600px;
        }
      }
    }
  }
}
</style>
