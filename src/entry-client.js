import 'es6-promise/auto'
import { app, store, router } from './app'

// prime the store with server-initialized state.
// the state is determined during SSR and inlined in the page markup.
if (window.__INITIAL_STATE__) {
  store.replaceState(window.__INITIAL_STATE__)
}

// wait until router has resolved all async before hooks
// and async components...
router.onReady(() => {
  if (!document.getElementById('app')) {
    const app = document.createElement('div')
    app.id = 'app'
    document.body.appendChild(app)
  }

  // actually mount to DOM
  app.$mount('#app')
})
