import ShoppingCart from './components/shop/shop-tab'
import Cart from './components/shop/cart-tab'

export const routes = [
    { path: '/', component: ShoppingCart, name: 'mainpage'},
    { path: '/Cart', component : Cart, name: 'cart'}, 
    {path: '*', redirect: '/' }
];
   
