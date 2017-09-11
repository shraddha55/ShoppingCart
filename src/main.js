// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import accounting from './accounting'
// import pluralize from 'pluralize'
import Shop from './components/shop/Shop'
import Cart from './components/shop/cart-tab'
import ShoppingCart from './components/shop/shop-tab'
import store from './store'
import VueFire from 'vuefire'
import firebase from 'firebase'
import VueRouter from 'vue-router'
import { routes } from './routes'
import Paginate from 'vuejs-paginate'

Vue.config.productionTip = false
Vue.use(VueFire)
Vue.use(VueRouter)
Vue.use(Paginate)
Vue.filter('formatMoney', accounting.formatMoney) 

const router = new VueRouter({
   mode: 'history',
   routes
  });

/* eslint-disable no-new */
new Vue({
  el: '#shop',
  store,
  router,
  render: h => h(Shop)
})
