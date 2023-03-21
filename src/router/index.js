// Importing dependencies
import Vue from 'vue'
import VueRouter from 'vue-router'

// Importing Views
import Home from '@/App.vue'
import { useModifiedRecords } from '@/occupancy/modifiedRecords'

Vue.use(VueRouter)

// Creating routes
const router = new VueRouter({
  base: './',
  mode: 'history',
  routes: [
    {
      // Home
      path: '/',
      name: 'Vanti Front End Dev Assessment',
      component: Home,
    }
  ],
})

router.beforeEach((to) => {
  const modifiedRecords = useModifiedRecords()

  // if URL has a filter query, store the query param in Pinia
  if (to.query.hasOwnProperty('filter')) modifiedRecords.sidebarSelection = to.query.filter
})

export default router
