// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'

Vue.config.productionTip = false

//使用mint-ui引入全部组件
import Mint from 'mint-ui'
Vue.use(Mint)
import 'mint-ui/lib/style.css'

//引入自己的全局的css样式
import '../static/css/global.css'



Axios.defaults.baseURL = 'http://www.sinya.online/api/'
//配置axios
Vue.prototype.$axios = Axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
