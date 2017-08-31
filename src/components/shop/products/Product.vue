<template>
  <div class="card text-xs-center">
    <img class="card-img-top" :src="product.url" :alt="product.title" width="220" height="220">
    <div class="card-block" style= "background-color: #FAFAD2">
      <h5 class="card-title">{{ product.title }}</h5>
      <p class="card-text">¥{{ product.price }} - Stock:{{product.inventory}}</p>
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
