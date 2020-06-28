<template>
    <div>
      <div class="demo">
          <button class="btnClick" @click="btnClick">点击动画</button>
          <transition name="drop"
            @before-enter = "beforeEnter"
            @enter = "enter"
            @after-enter = "afterEnter"
            >
                <!-- 
                  1. 两层DOM， 第一层相对于窗口绝对定位fixed, 子元素相对于父元素绝对定位position:absolute
                  2. 两层DOM都设置动画
                  3. 需要结合塞贝尔曲线 
                  4. vue操作DOM，基于vue是数据驱动视图，所以别有一番风味
                  5. 
                -->
            <div class="circularWrap" ref="circular" v-show="criticalFlag">
              <p class="circular"></p>
            </div>
          </transition>
      </div>
    </div>
</template>
<script>
export default {
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
      //console.log(2222);
      /*如何把动画钩子函数和绑定到指定的元素，点击触发*/
      //console.log(this.$refs.circular)
      //let el =  this.$refs.circular;
      this.criticalFlag = true

    },
    beforeEnter(el){
      //console.log(1111);
      console.log(el)
      let wH = window.innerHeight
      let wW = window.innerWidth
      console.log(wH,wW)
      el.style.transform = `translate3d(0, -${wH/2}px, 0)`
      // 内层元素p标签动画开始时的位置
      let innerEl = el.getElementsByTagName('p')[0]
      innerEl.style.transform = `translate3d(${wW}px, 0, 0)`
    },
    enter(el){
       // 这里必须得重绘，不然动画无法显示预期的效果,为什么要这样做和浏览器渲染有关
      let rf = el.offsetHeight;
      this.$nextTick(()=>{
        // 动画结束时的位置
        el.style.transform = `translate3d(0, 0, 0)`
        let innerEl = el.getElementsByTagName('p')[0]
        innerEl.style.transform = `translate3d(0, 0, 0)`
      })
    },
    afterEnter(el){
        this.criticalFlag = false
    }


  }
}
</script>

<style>
  .demo{
  text-align: left;
    padding-left: 20px;
  }
  .btnClick{
    padding:5px 10px;
    background: #e4e4e4;
    border: 1px solid #ccc;

  }
  .circularWrap{
    position: fixed;
    bottom: 0;
    left: 0;
    transition:all  .8s;
  }
  .circular{
    width: 20px;
    height: 20px;
    border-radius: 100%;
    background: #628ff8;
    transition:all  .8s;
  
  }
  .circularWrap.drop-enter-active{
    /* 塞贝尔曲线 */
    transition: all 0.6s cubic-bezier(0.49, -0.29, 0.75, 0.41);
  }

</style>