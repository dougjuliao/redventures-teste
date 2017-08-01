<template>
    <div class="my-cart">
        <div id="toggle-cart" v-on:click="toggleCart" :class="isactive ? 'isactive' : ''">
            <img class="cart-img" src="../../assets/images/cart.png">
            <span id="span-cart"></span>
        </div>
        <div class="cart" :class="isactive ? 'isactive' : ''">
            <ul class="list-art">
                <div v-if="product.length">
                    <h3>Voce tem um total de {{ product.length }} produto(s) em seu carrinho</h3><v-button classe="buy" text="Finalizar Compra" :add="false"></v-button>
                    <li class="content-item-cart" v-for="(prod,i) in product">
                        <v-product :prod="prod" :idx="i" :inCart="true"></v-product>
                    </li>
                </div>
                <li v-else>
                    <h3>Nenhum item na lista</h3>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    import Product from './Product';
    import Button from './Button';
    export default{
        name: 'v-cart',
        data (){
            return {
                isactive: false,
                product: []
            }
        },
        components:{
            'v-product': Product,
            'v-button': Button
        },
        methods: {
            toggleCart: function(){
                this.isactive = !this.isactive;
                this.product = JSON.parse(sessionStorage.getItem('cart'));
            }
        }
    }
</script>
<style scoped>
    .cart{
        margin: 0 0;
        padding: 0;
        position: absolute;
        z-index: 1;
        width: 100%;
        right: -100%;
        transition: 0.5s;
        background:#ccc;
        cursor:pointer;
        max-height:100%;
    }
    .cart.isactive{
        right:0;
    }
    #toggle-cart{
        right:10px;
        top:10px;
        position:absolute;
        cursor:pointer;
    }
    #toggle-cart.isactive{
        background:#fff;
    }
    .list-art{
        list-style: none;
        height: 100%;
        max-height: 500px;
        min-height: 300px;
        text-align: center;
        background: #ddd;
        padding: 1em 0.5em;
        overflow: auto;
        overflow-x:hidden;
    }
    .list-art div{
        background:#fff;
    }
    .content-item-cart{
        padding: 0.5em 0.5em;
        display: inline-block;
    }
    .cart-img{
        width:100%;
        max-width:50px;
        display:block;
    }
    #span-cart.has-item {
        position: absolute;
        top: 0;
        right: 0;
        background: #ff5c2b;
        padding: 0.2em 0.5em;
        border-radius: 50%;
        color: #fff;
    }
</style>