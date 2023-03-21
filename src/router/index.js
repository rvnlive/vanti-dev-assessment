// Importing dependencies
import Vue from 'vue'
import VueRouter from 'vue-router'

// Importing Views
import Home from '../views/OccupancyView.vue'
import { useModifiedRecords } from '@/occupancy/modifiedRecords'

const routes = [
  {
    // Home
    path: '/Home',
    name: 'Home',
    component: Home
  },
  // Every other path being redirected to home
  { path: '*', redirect: '/Home'}
]

// Creating routes
const router = new VueRouter({
  base: './',
  mode: 'history',
  routes,
})

router.beforeResolve((to, from, next) => {
  const modifiedRecords = useModifiedRecords()

  // if URL has a filter query, store the query param in Pinia
  if (to.query.hasOwnProperty('filter')) modifiedRecords.sidebarSelection = to.query.filter.replace('_', ' ')
  else router.push({ path: '/', query: { filter: 'All' } })

  next()
})

export default router
