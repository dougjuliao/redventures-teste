<template>
  <div id="app">
    <v-header></v-header>
    <v-body></v-body>
    <v-footer></v-footer>
  </div>
</template>

<script>
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

export default {
  name: 'app',
  components: {
    'v-header': Header,
    'v-body': Body,
    'v-footer': Footer
  }
}
</script>

<style></style>
