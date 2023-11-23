import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/upload.css';
import 'element-ui/lib/theme-chalk/badge.css';
// import 'animate.css'



import Clipboard from 'v-clipboard'
Vue.use(Clipboard)


import FooterView from '@/components/FooterView'
import PublicHeader from '@/views/PublicHeader'
import ShareLink from '@/components/ShareLink'
import ComMent from '@/components/ComMent'
// import SearchView from '@/views/SearchView'

// const baseUrl = "https://www.希雅.top:22222" 
// const baseUrl = "http://192.168.107.203:8080"
// const baseUrl = "http://192.168.69.203:23333"
// const baseUrl = "http://192.168.0.25:8080"
const baseUrl = "http://127.0.0.1:3000"

// export default baseUrl;

Vue.component('FooterView',FooterView)
Vue.component('PublicHeader',PublicHeader)
Vue.component('ShareLink',ShareLink)
Vue.component('ComMent',ComMent)
// Vue.component('SearchView',SearchView)

Vue.prototype.$GetUrl = "http://127.0.0.1:3000"
Vue.config.productionTip = false
Vue.use(ElementUI);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
