import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hi1 from '@/components/children/Hi1'
import Hi2 from '@/components/children/Hi2'
import query from '@/components/children/query'
import params from '@/components/children/params'
import Hello from '@/components/Hello'
import Count from '@/components/Count'
import Error from '@/components/Error'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children:[
        {path:'hi1',component:Hi1},
        {path:'hi2',component:Hi2},
      ]
    },
     {
      path: '/query',
      name: 'query',
      component: query,
    },
     {
      path: '/params/:paramsId',
      name: 'params',
      component: params,
    },
    {
      path:'/goback/:newsId(\\d+)/:newsTitle',
      redirect:'/count/:newsId(\\d+)/:newsTitle'
    },      
    {
      path: '/Hello',
      name: 'Hello',
       alias:'/jspang',
      component: Hello,
      beforeEnter:(to,from,next)=>{
        console.log('我进入了params模板');
        console.log(to);
        console.log(from);
        next();
      }
    },
    {
      path:'/count/:newsId(\\d+)/:newsTitle',
    	name:'Count',
    	component:{
        default:Count,
        left:Hi2,
        right:Hi1
      },

    },
    {
       path:'*',
       component:Error
    }
  ]
})
