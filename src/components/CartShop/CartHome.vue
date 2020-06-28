<template>
  <div class="component-wrap">
    <ul class="food-list">
      <li v-for="(item, index) in dataFood" :key="index">
        <span class="img"><img :src="item.icon" alt=""></span><div class="des">{{item.name}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
import dataFood from "./data.js";

console.log(dataFood);

export default {
  data() {
    return {
      dataFood
    };
  },
  methods: {}
};
</script>

<style scoped>
.component-wrap{
  padding: 0 20px;
}
.food-list{
  width: 100%;
}
.food-list li{
  width: 100%;
  display: flex;
  border-bottom: 1px solid #ccc;
  padding:15px 0;
}
.food-list li .img{
  width: 80px;
  flex: 0 0 80px;
}
.food-list li .img img{
  width: 100%;
  height: auto;
}
.food-list li .des{
  display: inline;
}
</style>
