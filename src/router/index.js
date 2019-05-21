import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import my from '../components/my'

Vue.use(Router)
Vue.component('my',my)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'h',
      component: HelloWorld
    }
  ]
})
