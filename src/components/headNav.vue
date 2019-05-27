<template>
  <div>
    {{title}}
    {{name}}
    {{title}}
    <button  @click="run">点击呀</button>
    <button @click="getMsg">获取父组件传的信息</button>
  </div>
</template>

<script>
  export default {
    name: "headNav",
    data () {
      return {}
    },
    methods: {
      getMsg() {
        console.log(this)
        console.log(this.run)
        console.log(this.title)
        console.log(this.name)
      }
    },
    props: ['title', 'name', 'run']
  }
</script>

<style scoped>

</style>
