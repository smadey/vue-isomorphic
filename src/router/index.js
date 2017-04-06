import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// We are using Webpack code splitting here so that each route's associated
// component code is loaded on-demand only when the route is visited.
// It's actually not really necessary for a small project of this size but
// the goal is to demonstrate how to do it.
//
// Note that the dynamic import syntax should actually be just `import()`
// but buble/acorn doesn't support parsing that syntax until it's stage 4
// so we use the old System.import here instead.
//
// If using Babel, `import()` can be supported via
// babel-plugin-syntax-dynamic-import.

const Page1 = () => System.import('../views/Page1.vue')
const Page2 = () => System.import('../views/Page2.vue')

export default new Router({
  mode: process.env.PLATFORM === 'app' ? 'hash' : 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/page1', component: Page1 },
    { path: '/page2', component: Page2 },
    { path: '/', redirect: '/page1' }
  ]
})
