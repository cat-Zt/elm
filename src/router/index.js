import Vue from 'vue'
import Router from 'vue-router'
import address from '@/views/address/Main.vue'
Vue.use(Router)

// const IndexRoute = {
//   // 进来
//   path: '/',
//   component: address,
//   redirect: '/address',
//   children: []
// }

// let routes = [
//   IndexRoute,
//   {
//     path: '/address',
//     component: () =>
//       import('@/views/address/Main.vue')
//   },
//   //  表示当有错误操作时，自动跳转到address这个路由中
//   {
//     path: '*',
//     redirect: '/address'
//   }
// ]

let routes = [
  {
    // 进来
    path: '/',
    component: address,
    redirect: '/address',
    children: []
  },
  {
    path: '*',
    redirect: '/address'
  }
]

// 每次新增业务模块的时候，我们都要在路由下面新增一个子路由模块，然后在index.js中导入。
// 通过上面的自动扫描全局组件注册，我们也可以实现自动扫描子模块路由并导入

const routerContext = require.context('./', true, /index\.js$/)
routerContext.keys().forEach(route => {
  // 如果是根目录的 index.js 、不处理
  if (route.startsWith('./index')) {
    return
  }
  const routerModule = routerContext(route)
  /**
   * 兼容 import export 和 require module.export 两种规范
   */
  // IndexRoute.children = [
  //   ...IndexRoute.children,
  //   ...(routerModule.default || routerModule)
  // ]
  routes = [ ...routes, ...(routerModule.default || routerModule) ]
})

export default new Router({
  mode: 'hash',
  routes: routes
})
