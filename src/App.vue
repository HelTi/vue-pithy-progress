<template>
  <div id="app">
    <circle-progress :percentage="percentage" />
    <div class="btn-wrapper">
      <button @click="changeProgrss">进度</button>
    </div>
  </div>
</template>

<script>
import CircleProgress from "./components/circle-progress";

export default {
  name: "App",
  data() {
    return {
      percentage: 10
    };
  },
  components: {
    CircleProgress
  },
  methods: {
    changeProgrss() {
      this.percentage += 10;
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
