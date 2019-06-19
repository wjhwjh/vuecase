<template>
  <div id="app">
    <div v-show="indexflag">
      <img src="./assets/logo.png">
      <br/>
      <my></my>
      <br/>
      <head-nav :title="title" :run="run" name="标题" :home="this"  title="静态的"></head-nav>
      <br/>
      <router-link :to="{name:'detail',  query:{id:'1'}}">带参数路由跳转</router-link>
    </div>
     <button @click="btn">这里是跳转</button>

     <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      title: '我是一个参数',
      index: true
    }
  },
  computed: {
    indexflag(){
      //console.log(this.index)
      let flag =  this.index
      return flag
    }
  },
  methods: {
    run(){
      alert('我是父组件的中的方法');
    },
    btn(){
      this.index = false

      this.$router.push({name: 'transition'})
      console.log(this.$router)

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
