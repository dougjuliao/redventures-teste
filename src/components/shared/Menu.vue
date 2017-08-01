<template>
    <div class="my-menu">
        <div id="toggle-menu" v-on:click="toggleMenu" :class="isactive ? 'isactive' : ''">
            <span></span>
            <span></span>
            <span></span>
        </div>
        <nav>
            <ul class="navigation" :class="isactive ? 'isactive' : ''">
                <li class="navigation-item"><a class="link-menu" href="#">Masculino</a></li>
                <li class="navigation-item"><a class="link-menu" href="#">Feminino</a></li>
                <li class="navigation-item"><a class="link-menu" href="#">Menino</a></li>
                <li class="navigation-item"><a class="link-menu" href="#">Menina</a></li>
           </ul>
        </nav>
    </div>
</template>
<script>
    export default{
        name: 'v-menu',
        data (){
        return {
                isactive: false
            }
        },
        methods: {
            toggleMenu: function(){
                this.isactive = !this.isactive;
            }
        }
    }
</script>
<style>
    .navigation{
        margin: 45px 0;
        padding: 0;
        position: absolute;
        z-index: 2;
        width: 100%;
        left: -100%;
        transition: 0.5s;
    }
    .navigation.isactive{
        left:0;
    }
    .navigation .navigation-item{
        list-style: none;
        margin:0;
    }
    .navigation .navigation-item .link-menu{
        text-decoration: none;
        padding: 1.7em;
        display: block;
        text-align: center;
        background: #f9f9f9;
        border-bottom: 1px solid #ececec;
        text-transform: uppercase;
        color: #000;
        font-weight: 600;
        font-size: 1.03em;
    }
    #toggle-menu{
        width: 50px;
        height: 35px;
        position: relative;
        float: left;
        margin: -4px 0 0 1em;
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
        transition: .5s ease-in-out;
        cursor: pointer;
        padding:10px 0;
    }
    #toggle-menu span{
        display: block;
        position: absolute;
        height: 7px;
        width: 100%;
        background: #4a4a4a;
        border-radius: 8px;
        opacity: 1;
        left: 0;
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
        -webkit-transition: .25s ease-in-out;
        -moz-transition: .25s ease-in-out;
        -o-transition: .25s ease-in-out;
        transition: .25s ease-in-out;
    }
    #toggle-menu span:nth-child(1) {
        top: 0px;
        -webkit-transform-origin: left center;
        -moz-transform-origin: left center;
        -o-transform-origin: left center;
        transform-origin: left center;
    }
    #toggle-menu span:nth-child(2) {
        top: 18px;
        -webkit-transform-origin: left center;
        -moz-transform-origin: left center;
        -o-transform-origin: left center;
        transform-origin: left center;
    }
    #toggle-menu span:nth-child(3) {
        top: 36px;
        -webkit-transform-origin: left center;
        -moz-transform-origin: left center;
        -o-transform-origin: left center;
        transform-origin: left center;
    }
    #toggle-menu.isactive span:nth-child(1) {
        -webkit-transform: rotate(45deg);
        -moz-transform: rotate(45deg);
        -o-transform: rotate(45deg);
        transform: rotate(45deg);
        top: 0;
        left: 0;
    }
    #toggle-menu.isactive span:nth-child(2) {
        width: 0%;
        opacity: 0;
    }
    #toggle-menu.isactive span:nth-child(3) {
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg);
        top: 37px;
    }
</style>