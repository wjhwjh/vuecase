import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import my from '../components/my'
import headNav from '../components/headNav'

console.log(my)

Vue.use(Router)
Vue.component('my',my)
Vue.component('headNav', headNav)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'h',
      component: HelloWorld
    }
  ]
})
