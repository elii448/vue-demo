import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    products: [
        {
          id: 1,
          name: 'Banana Skin',
          price: 10
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
};

const getters = {
    saleProducts: state => {
        var saleProducts = state.products.map(product => {
            return {
                id: product.id,
                name: '**' + product.name + '**',
                price: product.price / 2
            }
        });
        
        return saleProducts;
    }
};

const mutations = {
    reducePrice: (state, payload) => {
        state.products.forEach( product => {
            product.price -= payload.amount * payload.anotherAmount;
        });
    }
}

const actions = {
    reducePrice: (context, payload) => {
        setTimeout(() => {
            context.commit('reducePrice', payload);
        }, 3000);
    }
}

export default new Vuex.Store({
    strict: true,
    state,
    getters,
    mutations,
    actions
})