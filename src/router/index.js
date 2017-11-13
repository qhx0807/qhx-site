import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
const Header = resolve => require(['@/components/page/Header'], resolve)
const Home = resolve => require(['@/components/page/Home'], resolve)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/header',
      name: 'Header',
      component: Header
    }
  ]
})
