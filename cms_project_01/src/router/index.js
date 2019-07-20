import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home/Home'
import Vip from '@/components/Vip/Vip'
import Cart from '@/components/Cart/Cart'
import Search from '@/components/Search/Search'
import NewsList from '@/components/News/NewsList'

//使用vue-router插件 vue.prototype.$router = Router;
Vue.use(Router)

export default new Router({
  //匹配路由规则
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/vip',
      name: 'vip',
      component: Vip
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/news/list',
      name: 'news.list',
      component: NewsList
    }
  ]
})
