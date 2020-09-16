<template>
  <div class="a-progress-bar-wrapper" :style="wrapperStyle">
    <div class="progress-outside" :style="outsideStyle">
      <div class="progress-inner" :style="innerBarStyle">
        <slot>
          <div v-if="showTopTip" :style="tipStyle" class="bar-tip">
            {{ percentage }}%
          </div>
        </slot>
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
    },
    bgColor: {
      type: String,
      default: '#ffcaca'
    },
    color: {
      type: String,
      default: '#e57d4b'
    },
    showTopTip: {
      type: Boolean,
      default: true
    },
    tipBgColor: {
      type: String,
      default: '#ffcaca'
    },
    tipFontColor: {
      type: String,
      default: '#ff445a'
    }
  },
  computed: {
    innerBarStyle() {
      return {
        width: (this.percentage > 100 ? 100 : this.percentage) + '%',
        height: this.height + this.unit,
        'border-radius': (this.height / 2).toFixed(2) + this.unit,
        background: this.color
      }
    },
    outsideStyle() {
      return {
        height: this.height + this.unit,
        'border-radius': (this.height / 2).toFixed(2) + this.unit,
        background: this.bgColor
      }
    },
    wrapperStyle() {
      return {
        width: this.width
      }
    },
    tipStyle() {
      return {
        color: this.tipFontColor,
        background: this.tipBgColor
      }
    }
  }
}
</script>
<style lang="scss">
.a-progress-bar-wrapper {
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
    position: relative;
    overflow: visible;

    .progress-inner {
      transition: all 0.3s ease-in;
      position: relative;

      .bar-tip {
        display: block;
        width: 75px;
        height: 25px;
        line-height: 25px;
        border-radius: 12.5px;
        text-align: center;
        font-size: 13px;
        border-radius: 4px;
        position: absolute;
        top: -34px;
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
