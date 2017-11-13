import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
const Header = resolve => require(['@/components/page/Header'], resolve)
const IndexPage = resolve => require(['@/components/page/IndexPage'], resolve)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'IndexPage',
      component: IndexPage
    },
    {
      path: '/header',
      name: 'Header',
      component: Header
    }
  ]
})
