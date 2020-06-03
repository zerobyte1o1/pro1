import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'

import Vant from 'vant'
import 'vant/lib/index.css'
import axios from 'axios'
// 配置请求的跟路径
axios.interceptors.request.use(config => {
    // console.log(config)
    config.headers.Authorization = window.sessionStorage.getItem('token')
        // 在最后必须 return config
    return config
})
Vue.prototype.$http = axios
Vue.config.productionTip = false

Vue.use(Vant);
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')