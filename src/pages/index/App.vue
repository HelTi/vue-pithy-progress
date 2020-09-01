<template>
  <div id="app">
    <div class="con">
      <circle-progress :percentage="percentage"> </circle-progress>
    </div>
    <div>
      <semi-circle-progress :percentage="percentage" />
    </div>

    <div class="btn-wrapper">
      <button @click="changeProgrss">进度</button>
    </div>
  </div>
</template>

<script>
import CircleProgress from '../../components/circle-progress'
import SemiCircleProgress from '../../components/semi-circle-progress'

export default {
  name: 'App',
  data() {
    return {
      percentage: 10
    }
  },
  components: {
    CircleProgress,
    SemiCircleProgress
  },
  methods: {
    changeProgrss() {
      this.percentage += 10
    }
  }
}
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}
body,
html {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
