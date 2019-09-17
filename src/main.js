import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'

// 全局组件自动注册
import './components'

// 引入element ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 引入 Vant
import Vant from 'vant'
import 'vant/lib/index.css'

// 引入公共的css
import '@/style/index.less'

// 引入vue 跨域
import VueResource from 'vue-resource'

// 引入 v-Viewer
import 'viewerjs/dist/viewer.css'
import Viewer from 'v-viewer'
Vue.use(Viewer)

Vue.use(Vant)
Vue.use(ElementUI)
Vue.use(VueResource)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
