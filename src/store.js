import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
    counter: 10
    },
    mutations: {
        increment(state){
            state.counter++
        },
        decrement(state){
            state.counter--
        }

    },
    actions: {
        increment: ({ commit }) => {
            setTimeout(() => {
                commit('decrement')
            }, 3000);
        }
    }
})