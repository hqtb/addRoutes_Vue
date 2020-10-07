import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
localStorage.setItem('token', new Date().getTime())
Vue.config.productionTip = false
store.dispatch('getHandleTree')
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')