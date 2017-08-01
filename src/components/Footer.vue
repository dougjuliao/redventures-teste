<template>
    <footer>
        <div class="footer">
            <h1>Just Do it.</h1>
            <v-button classe="all" text="Todos os produtos"></v-button>
            <div class="overlay-bg"></div>
        </div>
        <div class="copyright">
            <small>Nike Copyright 2017 - all rights reserved</small>
        </div>
    </footer>
</template>
<script>
import Button from './shared/Button';
export default{
    name: 'v-footer',
    data (){
        return {
            title: 'FOOTER'
        }
    },
    components: {
        'v-button': Button
    }
 }
</script>
<style scoped>
.footer{
    position: relative;
    text-align: center;
    background-image: url('../assets/images/banner-footer.png');
    background-size: cover;
    height: 400px;
    margin-top: 80px;
    padding: 0.1em;
    width:100%;
}
.footer h1{
    color:#fff;
    font-size: 4em;
    margin-top: 145px;
    margin-bottom: 5px;
    position:relative;
    z-index:2;
}
.filter-button{
    text-align:center;
    position:relative;
    z-index:2;
}
.overlay-bg{
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.54);
    top: 0;
    left: 0;
    z-index: 1;
}
.copyright small{
    padding: 17px 0;
    display: block;
}
</style>