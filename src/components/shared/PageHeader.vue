<template>
  <nav class="navbar navbar-light bg-faded" v-if="profile.limit "style="background-color:#DC143C"> 
   <div class="container">
      <a class="navbar-brand" href="/" id="color-me"><b>
       <img :src="require('@/assets/abeja_logo.png')" width="50" height="50"/>
       Abeja merchandise store </b> </a>       
        <span class="navbar-text float-xs-right">
       <router-link to="/Cart" class="btn btn-primary navbar-btn" tag="button">Cart</router-link>
        <router-link to="/" class="btn btn-success navbar-btn" tag="button">Store</router-link> 
    </span>
    </div>
    <div class="container">   
        <span class="navbar-text float-xs-right" id="color-text">
        Hello <strong>{{fullName}}</strong>, your credit limit is
         <shopping-cart-limit :limit="profile.limit"></shopping-cart-limit>
        </span>
    </div>
  </nav>
</template>

<script>
import ShoppingCartLimit from './../shop/shopping-cart/ShoppingCartLimit'
import { mapActions, mapState } from 'vuex'
import Cart from './../shop/cart-tab'
import img from './../../assets/abeja_logo.png'

export default {
  computed: {
    ...mapState({
      profile: state => state.profile.data
    }),
    fullName () {
      return `${this.profile.firstName} ${this.profile.lastName}`
    }
  },
  methods: mapActions([
    'getProfile'
  ]),
  components: { ShoppingCartLimit },
  created () {
    this.getProfile()
  }
}
</script>
<style>

#color-me{

   color: white;
   font: helvetica;
   font-size: xx-large;
}

#color-text{

   color: #faebd7;

}
</style>

