<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view />
    <my></my>
    <head-nav :title="title" :run="run" name="标题" :home="this"></head-nav>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      title: '我是一个参数'
    }
  },
  methods: {
    run(){
      alert('我是父组件的中的方法');
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
