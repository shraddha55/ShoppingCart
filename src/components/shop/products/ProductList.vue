<template>
  <div>
    <h1><b>Abeja Products</b></h1>
    <div class="row" v-for="row in productRows">
      <div class="col-sm-6 col-xs-12 col-md-4 col-lg-3" v-for="product in row">
        <product
          :product="product"
          track-by="id">
        </product>
      </div>
    </div>
  </div>
</template>

<script>
import Product from './Product'
import { mapActions, mapState } from 'vuex'

export default {
  computed: mapState({
     productRows: state => state.products
  }),
  methods: mapActions([
    'getProducts'
  ]),
  components: { Product },
  created () {
    this.getProducts()
  }
}
</script>
