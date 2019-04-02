import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from './views/Index.vue'
import New from './views/News.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: resolve => {
        require.ensure([], () => resolve(require('@/views/Index.vue')), 'index')
      }
    },
    {
      path: '/news/:id',
      name: 'news',
      component: New
    }
  ]
})
