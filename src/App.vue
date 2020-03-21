<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <worker-demo />
  </div>
</template>

<script>
import WorkerDemo from './components/WorkerDemo.vue'

export default {
  name: 'App',
  components: {
    WorkerDemo
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
