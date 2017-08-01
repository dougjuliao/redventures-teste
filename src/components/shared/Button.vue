<template>
    <div class="filter-button" :class="classe">
        <button class="all_products" @click="addToCart(add)">{{ text }}</button>
    </div>
</template>
<script>
    export default{
        name: 'v-button',
        props: {
            text: String,
            classe: String,
            itemToBuy: Object,
            add: Boolean
        },
        methods: {
            addToCart: function(add){
              if(add){
                let cart = JSON.parse(sessionStorage.getItem('cart'));
                if(cart.length){
                  cart = cart.concat(this.itemToBuy);
                  sessionStorage.setItem('cart',JSON.stringify(cart));
                }else{
                  sessionStorage.setItem('cart',JSON.stringify([this.itemToBuy]));
                }

                let spanCart = document.getElementById('span-cart');
                spanCart.innerHTML = JSON.parse(sessionStorage.getItem('cart')).length;
                spanCart.classList.add('has-item');
              }
            }
        }
    }
</script>
<style scoped>
    .filter-button {
      text-align:right;
      margin-bottom:30px;
    }
    .all_products{
      font-family: 'Roboto', Helvetica, Arial, sans-serif;
      background: #313131;
      color: #fff;
      border: none;
      border-radius: 3px;
      font-size: 0.65em;
      padding: 1.1em;
      text-transform: uppercase;
      cursor:pointer;
      transition:.5s;
    }
    .all_products:hover{
      opacity:0.8;
    }
    .buy{
        width: 90%;
        margin: 0 auto;
        text-align:center;
    }
    .buy button{
        background: #ff5c2b;
        width:100%;
        font-size: 0.8em;
    }
</style>