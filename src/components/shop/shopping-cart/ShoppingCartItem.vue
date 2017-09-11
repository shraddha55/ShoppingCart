<template>
  <div class="media mb-1">
    <div class="media-left">
      <img class="media-object rounded" :src="require('@/assets/abeja_logo1.png')" width="50" height="50" :alt="item.title"/>
    </div>
    <div class="media-body">
      <strong class="d-block">{{item.title}}</strong>
      <span>Quantity: {{item.quantity}} - {{item.price | formatMoney}}</span>
    </div>
    <div class="media-right align-middle">
      <remove-from-cart :product="item"></remove-from-cart>
    </div>
  </div>
</template>

<script>
import RemoveFromCart from './../products/RemoveFromCart'
export default {
  props: {
    item: Object,
    product: Object
  },
  components: { RemoveFromCart }
}
</script>
