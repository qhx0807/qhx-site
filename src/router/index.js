import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
const Header = resolve => require(['@/components/page/Header'], resolve)
const IndexPage = resolve => require(['@/components/page/IndexPage'], resolve)
const Tags = resolve => require(['@/components/page/Tags'], resolve)
const Archives = resolve => require(['@/components/page/Archives'], resolve)

const Login = resolve => require(['@/components/admin/Login'], resolve)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'IndexPage',
      component: IndexPage
    },
    {
      path: '/tags',
      name: 'Tags',
      component: Tags
    },
    {
      path: '/archives',
      name: 'Archives',
      component: Archives
    },
    {
      path: '/header',
      name: 'Header',
      component: Header
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
