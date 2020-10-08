import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)
// localStorage.setItem('token', new Date().getTime())
Vue.config.productionTip = false;
localStorage.setItem('islogin', 0);
import './perssion'
// store.dispatch('')
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')