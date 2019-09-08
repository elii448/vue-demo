<template>
  <div id="app">
    <product-list-one></product-list-one>
    <product-list-two></product-list-two>
  </div>
</template>

<script>
import ProductListOne from './components/productListOne';
import ProductListTwo from './components/productListTwo';

export default {
  components: {
    'product-list-one': ProductListOne,
    'product-list-two': ProductListTwo
  },
  name: 'app',
  data () {
    return {
      
    }
  }
}
</script>

<style lang="scss">
body{
    font-family: Ubuntu;
    color: #555;
}
</style>
