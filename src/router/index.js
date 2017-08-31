import Vue from 'vue'
import Router from 'vue-router'
import ShoppingCart from './components/shop/shop-tab'
import Cart from './components/shop/cart-tab'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'shop',
      component: ShoppingCart
    },
    {
      path: '/Cart',
      name: 'cart',
      component: Cart
    }
  ]
})
