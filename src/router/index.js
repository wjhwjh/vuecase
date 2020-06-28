import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import my from '@/components/my'
import headNav from '@/components/headNav'
import CartHome from '@/components/CartShop/CartHome'
import transition from '@/components/transition'
import Ball from '@/components/Ball.vue'

// console.log(my)

Vue.use(Router)
Vue.component('my', my)
Vue.component('headNav', headNav)

export default new Router({
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/ball',
            name: 'ball',
            component: Ball
        },
        {
            path: '/cartHome',
            name: 'cartHome',
            component: CartHome
        },
        {
            path: '/transition',
            name: 'transition',
            component: transition
        },

    ]
})