<template>
  <div id="app">
     <ul class="tab">
       <li v-for="(item, index) in routeArray" :key="index">
         <router-link :to="{name:item.name}">{{item.title}}</router-link>
       </li>
     </ul>
    <router-view></router-view>
  </div>
</template>

<script>

let routeArray = [
  {
    title:'首页',
    name:'home'
  },
  {
    title:'小球运动',
    name:'ball'
  },
  {
    title:'组件传值',
    name:'cartIndex'
  },
]


export default {
  name: 'App',
  data () {
    return {
     
      routeArray,
    }
  },
  
}
</script>

<style>
.tab{
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  border-bottom: 1px solid #ccc;
  margin-bottom:20px;
  padding-bottom: 10px;
  /* padding-top: 10px; */
}
.tab li{
  width: 100px;
  text-align: center;
  height: 24px;
  border-right: 1px solid #ccc;
  margin: 10px 0;
}
.tab li a{
  display: block;
  line-height: 24px;
  color: #333;
  font-size: 16px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, .2);
  
}
.tab li a:hover{
  color: #fe6804;
}
</style>
