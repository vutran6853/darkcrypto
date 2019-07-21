import Vue from 'vue'
import Router from 'vue-router'
import Home from '../src/components/Home.vue'
import Coin from '../src/components/coin/Coin.vue'
import News from '../src/components/news/News.vue'

Vue.use(Router)

const route = new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Coin',
      name: 'Coin',
      component: Coin  
    },
    {
      path: '/News',
      name: 'News',
      component: News
    }
  ]
})

export default route