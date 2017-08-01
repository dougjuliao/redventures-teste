<template>
    <header class="header">
        <div class="header-top">
            <v-menu></v-menu>
            <div class="logo">
                <a href="#">
                    <img src="../assets/images/nike-logo.png" alt="Logo">
                </a>
            </div>
            <v-cart></v-cart>
        </div>
        <div class="header-banner">
            <img src="../assets/images/banner.png" alt="Banner">
        </div>
    </header>
</template>
<script>
import Menu from './shared/Menu';
import Cart from './shared/Cart';
 export default{
    name: 'v-header',
    components: {
        'v-menu':Menu,
        'v-cart':Cart
    }
 }
</script>
<style></style>