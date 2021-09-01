import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store'
import './registerServiceWorker'
// 引入element ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 引入 axios
import axios from 'axios'
//引入tailwind
import '@/assets/scss/main.scss'

Vue.use(ElementUI)
Vue.use(axios)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
