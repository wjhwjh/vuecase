<template>
  <div>
    这是我创建的一个template

    <!--$emit的使用-->
    <welcome-btn v-on:getAdvice="sayhi"></welcome-btn>
  </div>
</template>

<script>
  import Vue from 'vue'

  Vue.component('welcome-btn', {
    template: `<input @input="getIpt" value="click me to be welcome">`,
    methods:{
       getIpt(){
         //console.log(this.$el.value);
         let val = this.$el.value;
         this.$emit('getAdvice',val)
       }
    }
  })


  export default {
    name: "my",
    data(){
      return {}
    },
    methods: {
      sayhi(msg){
        console.log(msg)
      }
    }
  }
</script>

<style scoped>

</style>
