<template>
  <div id= "color-bg">
    <div class="container">
      <coupons></coupons>
  
        <div class="col-sm-3">
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

    background-color: #39CCCC;

  }
</style>
