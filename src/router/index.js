import Vue from 'vue'
import Router from 'vue-router'
const Header = resolve => require(['@/components/page/Header'], resolve)
const IndexPage = resolve => require(['@/components/page/IndexPage'], resolve)
const Tags = resolve => require(['@/components/page/Tags'], resolve)
const Archives = resolve => require(['@/components/page/Archives'], resolve)

const Login = resolve => require(['@/components/admin/Login'], resolve)
const Admin = resolve => require(['@/components/admin/Admin'], resolve)
const Dashboard = resolve => require(['@/components/admin/Dashboard'], resolve)
const Notes = resolve => require(['@/components/admin/Notes'], resolve)
const NoteTags = resolve => require(['@/components/admin/Tags'], resolve)
const Notice = resolve => require(['@/components/admin/Notice'], resolve)
const Message = resolve => require(['@/components/admin/Message'], resolve)
const Photo = resolve => require(['@/components/admin/Photo'], resolve)
const Publish = resolve => require(['@/components/admin/Publish'], resolve)
const Log = resolve => require(['@/components/admin/Log'], resolve)
const Pv = resolve => require(['@/components/admin/Pv'], resolve)
const Manager = resolve => require(['@/components/admin/Manager'], resolve)
const Archive = resolve => require(['@/components/admin/Archives'], resolve)

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
    },
    {
      path: '/admin',
      component: Admin,
      children:[
        {
          path: '/admin/dashboard',
          name: 'Dashboard',
          component: Dashboard,
        },
        {
          path: '/admin/notes',
          name: 'Notes',
          component: Notes,
        },
        {
          path: '/admin/archive',
          name: 'Archive',
          component: Archive,
        },
        {
          path: '/admin/tags',
          name: 'NoteTags',
          component: NoteTags,
        },
        {
          path: '/admin/notice',
          name: 'Notice',
          component: Notice,
        },
        {
          path: '/admin/message',
          name: 'Message',
          component: Message,
        },
        {
          path: '/admin/photo',
          name: 'Photo',
          component: Photo,
        },
        {
          path: '/admin/publish',
          name: 'Publish',
          component: Publish,
        },
        {
          path: '/admin/log',
          name: 'Log',
          component: Log,
        },
        {
          path: '/admin/pv',
          name: 'Pv',
          component: Pv,
        },
        {
          path: '/admin/manager',
          name: 'Manager',
          component: Manager,
        },
      ]
    }
  ]
})
