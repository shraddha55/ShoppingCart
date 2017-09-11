<template>
  <div class="card text-xs-center">
    <div class= "item"> 
    <img class="card-img-top" :src="product.url" :alt="product.title" width="220" height="220" align="center">
    <div class="item-overlay top"></div>
    </div>
    <div class="card-block" style= "background-color: #fefbf7">
      <h5 class="card-title">{{ product.title }}</h5>
      <p class="card-text"> {{ product.price | formatMoney }} - Stock:{{product.inventory}}</p>
      <add-to-cart :product="product"></add-to-cart>
    </div>
  </div>
</template>

<script>
import AddToCart from './AddToCart'

export default {
  props: {
    product: Object
  },
  components: { AddToCart }
}
</script>

<style>

.item {
  align: center;
  position: static; 
  overflow: hidden;
  width: 220;
  height: 220;
}

.item img { 
  -moz-transition: all 0.3s;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}

.item:hover img {
  -moz-transform: scale(1.5);
  -webkit-transform: scale(1.5);
  transform: scale(1.5);
}

</style>

