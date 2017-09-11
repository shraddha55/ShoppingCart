<template>
  <div id= "color-bg">
    <div class="container">
      <coupons></coupons> 
        <div class="col">
          <shopping-cart></shopping-cart>
        </div>
    </div>
  </div>
</template>

<script>
import PageHeader from './../shared/PageHeader'
import Coupons from './Coupons'
import ShoppingCart from './shopping-cart/ShoppingCart'
export default {
  name: 'shop',
  components: {
    PageHeader,
    Coupons,
    ShoppingCart
  }
}
</script>

<style>

  #color-bg{

    background-color: #fefbf7;

  }
</style>
