<template> 
 <div id = "color-bg">
    <div class= "container" id="color-bg">
    <coupons></coupons>
     <div class="row">
      <div class= "col">
        <product-list></product-list>
      </div>
     </div>

    </div>
  </div>
</template>

<script>
import PageHeader from './../shared/PageHeader'
import Coupons from './Coupons'
import ProductList from './products/ProductList'
export default {
  name: 'shop',
  components: {
    PageHeader,
    Coupons,
    ProductList
  }
}
</script>

<style>
  #color-bg{  
   background-color: #fefbf7;
  }
</style>
