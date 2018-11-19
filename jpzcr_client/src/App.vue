<template>
  <div id="app">
      <Index></Index>
  </div>
</template>

<script>
import Index from './components/Index'

export default {
  name: 'App',
  components: {
    "Index":Index
  }
}
</script>

<style>
@import "../static/css/reset.css";
#app {
  font-family:'SimSun', 'ËÎÌו';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0px;
  padding: 0px;
}


</style>
