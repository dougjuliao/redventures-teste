<template>
    <section class="section content">
        <div class="filter">
            <div class="check-content">

                <ul class="check-input-labels">
                    <li class="check check-t">
                        <label class="check-title">Chuteiras HyperVenom:</label>
                    </li>
                    <li class="check">
                        <input class="ipt input-filter" type="checkbox" id="cano_alto" value="cano_alto" v-model="cano_alto">
                        <label class="lbl" for="cano_alto">Cano alto</label>
                    </li>
                    <li class="check">
                        <input class="ipt input-filter" type="checkbox" id="cano_baixo" value="cano_baixo" v-model="cano_baixo">
                        <label class="lbl" for="cano_baixo">Cano baixo</label>
                    </li>
                    <li class="check">
                        <input class="ipt input-filter" type="checkbox" id="campo" value="campo" v-model="campo">
                        <label class="lbl" for="campo">Futebol Campo</label>
                    </li>
                    <li class="check">
                        <input class="ipt input-filter" type="checkbox" id="society" value="society" v-model="society">
                        <label class="lbl" for="society">Futebol Society</label>
                    </li>
                </ul>
            </div>
            <v-button classe="all" text="Todos os produtos" :add="false"></v-button>
        </div>
        <div class="products">
            <div class="products-best">
                <h2>Mais vendidos</h2>
                <carousel :perPage="5" :perPageCustom="[[100, 1], [640, 2], [960, 3], [1200, 4]]">
                    <slide v-for="(prod,i) in products(data['best-sellers'])" class="product-item-slide">
                        <v-product :prod="prod" :idx="i"></v-product>
                    </slide>
                </carousel>
            </div>
            <div class="products-new">
            <h2>Lançamentos</h2>
                <carousel :perPage="5" :perPageCustom="[[100, 1], [640, 2], [960, 3], [1200, 4]]">
                    <slide v-for="(prod,i) in products(data.releases)" class="product-item-slide">
                        <v-product :prod="prod" :idx="i"></v-product>
                    </slide>
                </carousel>
            </div>
        </div>
    </section>
</template>
<script>
import Button from './shared/Button';
import axios from 'axios';
import  { Carousel, Slide } from 'vue-carousel';
import Product from './shared/Product';
export default{
    name: 'v-body',
    components: {
        'v-button': Button,
        'v-product': Product,
        Carousel,
        Slide
    },
    data (){
        return {
            data: [],
            cano_alto: false,
            cano_baixo: false,
            campo: false,
            society: false
        }
    },
    mounted() {
        axios.get('http://www.raphaelfabeni.com.br/rv/data.json').then((d) => {
            this.data = d.data;
        }).catch((err) => {
            console.err(err);
        });
    },
    methods: {
        products(d) {
            const self = this;
            if (self.cano_alto == false && self.cano_baixo == false && self.campo == false && self.society == false) {
                return d;
            }
            return d.filter(function (element) {
                if (self.cano_alto && element['high-top']) return true;
                if (self.cano_baixo && element['high-top'] == false) return true;
                if (self.campo && element.category == 'campo') return true;
                if (self.society && element.category == 'society') return true;
                if (!self.cano_alto && !self.cano_baixo && !self.campo && !self.society) return true;
                return false;
            })
        }
    },

 }
</script>
<style>
.products-new{ margin-top:90px; }
</style>