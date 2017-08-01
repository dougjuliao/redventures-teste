<template>
    <div class="product-item"
        :data-type="prod['high-top'] ? 'cano_alto' : 'cano_baixo'"
        :data-category="prod.category">{{prod.category}}
        <img class="img-product" :src="prod.image" :alt="'product-'+idx">
        <div class="personalize">
            <img src="../../assets/images/personalize.jpg">
            <p>Personalize</p>
        </div>
        <div class="product-information">
            <h2 class="p-title">{{ prod.title }}</h2>
            <p class="p-type">{{ prod['high-top'] ? 'Cano Alto' : 'Cano Baixo' }}</p>
            <p class="p-price">R$ {{ prod.price.toFixed(2) }}</p>
            <p class="p-installments">ou {{ prod.installments.number }}X{{ prod.installments.value.toFixed(2) }} sem juros</p>
        </div>
        <div v-if="!inCart">
            <v-button classe="buy" text="Comprar" :item-to-buy="prod" :add="true"></v-button>
        </div>
        <div v-else></div>
    </div>
</template>
<script>
    import Button from './Button';
    export default{
        name: 'v-product',
        components: {
            'v-button': Button
        },
        props: {
            prod: Object,
            idx: Number,
            inCart: Boolean
        }
    }
</script>
<style>
    .product-item{
        position: relative;
        padding: 1em 3em;
        border: 1px solid #fff;
        width: 200px;
        margin: 0 auto;
    }
    .product-item:hover{
        border: 1px solid #ccc;
    }
    .product-item .img-product{  }
    .personalize{  border-bottom: 1px solid #ccc; }
    .personalize img{
        display:inline-block;
        width:16px;
        vertical-align: middle;
    }
    .personalize p{
        display: inline-block;
        width:90%;
        text-align:left;
        color:#888;
        font-weight: 600;
        text-transform:uppercase;
        font-size:0.8em;
        margin-bottom: 4px;
    }
    .product-information {
        text-align: left;
        min-height: 140px;
    }
    .product-information .p-title{
        font-size: 1em;
        color: #010101;
    }
    .product-information .p-type{
        font-size: 1em;
        color: #ababab;
        margin: 0;
    }
    .product-information .p-price{
        font-size: 1.2em;
        margin: 0;
        color: #777777;
        font-weight: 700;
    }
    .product-information .p-installments{
        font-size: 1em;
        color: #ababab;
        margin: 1px 0 10px;
    }
</style>