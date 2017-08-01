import Vue from 'vue';
import App from './App';

import VueCarousel from 'vue-carousel'; //CAROUSEL

import 'normalize.css/normalize.css';
import './assets/css/style.css';

new Vue({
    el: '#app',
    template: '<App/>',
    components: { App }
});
Vue.use(VueCarousel);
sessionStorage.setItem('cart','[]');