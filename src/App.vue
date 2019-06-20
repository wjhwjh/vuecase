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
    <!-- <button @click="btn">这里是跳转</button>

     <router-view />-->

    <div class="demo">
      <button class="btnClick" @click="btnClick">点击动画</button>
      <transition name="drop"
         @before-enter = "beforeEnter"
         @enter = "enter"
         @after-enter = "afterEnter"
      >
         <div class="circularWrap" ref="circular" v-show="criticalFlag">
           <p class="circular"></p>
         </div>
      </transition>
    </div>


  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      title: '我是一个参数',
      index: false,
      criticalFlag: false
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
     // console.log(this.$router)

    },
    btnClick(){
      /*如何把动画钩子函数和绑定到指定的元素，点击触发*/
      //console.log(this.$refs.circular)
      //let el =  this.$refs.circular;
      this.criticalFlag = true

    },
    beforeEnter(el){
      console.log(el)
      let wH = window.innerHeight
      let wW = window.innerWidth
      console.log(wW)
      el.style.transform = `translate3d(0, -${wH/2}px, 0)`
      let innerEl = el.getElementsByTagName('p')[0]
      innerEl.style.transform = `translate3d(${wW}px, 0, 0)`
    },
    enter(el){
       // 这里必须得重绘，不然动画无法显示预期的效果,为什么要这样做和浏览器渲染有关
      let rf = el.offsetHeight;
      this.$nextTick(()=>{
        el.style.transform = `translate3d(0, 0, 0)`
        let innerEl = el.getElementsByTagName('p')[0]
        innerEl.style.transform = `translate3d(0, 0, 0)`
      })
    },
    afterEnter(el){}


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


/*.fade-enter-active{*/
  /*transition: all .8s cubic-bezier(0.49, -0.29, 0.75, 0.41);*/
  /*transform: translate3d(0 ,0 ,0);*/

/*}*/
/*.fade-leave-active {*/
  /*transition: opacity .5s;*/
/*}*/
.demo{
 text-align: left;
  padding-left: 20px;
}
.btnClick{
  padding:5px 10px;
}
.circularWrap{
  position: fixed;
  bottom: 0;
  left: 0;
}
.circular{
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background: #628ff8;
  transition:all  .8s;
}
.circularWrap.drop-enter-active{
  transition: all 0.6s cubic-bezier(0.49, -0.29, 0.75, 0.41);
}

</style>
