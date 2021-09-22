import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Demo1 from '@/views/Demo1'
import Demo2 from '@/views/Demo2'
import Demo3 from '@/views/Demo3'
import Demo4 from '@/views/Demo4'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/demo1',
      name: 'demo1',
      component: Demo1
    },
    {
      path: '/demo2',
      name: 'demo2',
      component: Demo2
    },
    {
      path: '/demo3',
      name: 'demo3',
      component: Demo3
    },
    {
      path: '/demo4',
      name: 'demo4',
      component: Demo4
    }
  ]
})
