// Add your code here

import Vue from 'https://dev.jspm.io/vue/dist/vue';
import {ShoppingCart} from './ShoppingCart.js'

let products = [
  { "id": "170001", "name": "masks" , price: 10},
  { "id": "170002", "name": "pears" , price: 6},
  { "id": "170003", "name": "cakes" , price: 40},
  { "id": "170004", "name": "bikes" , price: 200},
]

new Vue({
  el: "#app",
  data() {
    return {
      cart: new ShoppingCart(),
      products
    };
  },
  computed: {
    count() {
      return this.cart.count();
    },
    totalPrice() {
      return this.cart.totalPrice();
    }
  }
});