<template>
  <div>
    <!--氮元素动画-->
    <div class="demo">
      <button @click="showFlag = !showFlag">点击消失</button>
      <transition name="fade">
        <p v-show="showFlag">hello</p>
      </transition>
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        showFlag: true
      }
    }

  }
</script>

<style scoped>
   .fade-enter-active{
     transition: all .8s cubic-bezier(0.49, -0.29, 0.75, 0.41);
     transform: translate3d(0 ,0 ,0);

   }
   .fade-leave-active {
    transition: opacity .5s;
   }
  .fade-enter, .fade-leave-to{
    transform: translate3d(-20px ,-30px ,0);
    opacity: 0;
    transition: .5s;
  }
</style>
