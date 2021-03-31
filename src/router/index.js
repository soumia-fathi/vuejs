import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'



Vue.use(VueRouter)

const routes = [{
  path:'/',
  
component:Dashboard,
children:[{
  path:'/',
  components:()=>import("../views/FileContent")},
{
  path:'/Message',
  components:()=>import("../views/Message")},

  {path:'/Settings',
components:()=>import("../views/Settings")}
]
}]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
