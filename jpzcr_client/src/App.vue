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
  font-family:'SimSun', '宋体';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  margin: 0px;
  padding: 0px;
  background: #F6F6F6;
}


</style>
