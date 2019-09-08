<template>
  <div id="app">
    <product-list-one v-bind:products="products"></product-list-one>
    <product-list-two v-bind:products="products"></product-list-two>
  </div>
</template>

<script>
import ProductListOne from './components/productListOne';
import ProductListTwo from './components/productListTwo';

export default {
  name: 'app',
  components: {
    'product-list-one': ProductListOne,
    'product-list-two': ProductListTwo
  },
  data () {
    return {
      products: [
        {
          id: 1,
          name: 'Banana Skin',
          price: 500
        },
        {
          id: 2,
          name: 'Sea Shell',
          price: 30
        },
        {
          id: 3,
          name: 'Chicken Fillet',
          price: 50
        },
        {
          id: 4,
          name: 'Papaermint',
          price: 40
        },
      ]
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
