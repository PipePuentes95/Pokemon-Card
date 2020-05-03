import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pokemon: {}
  },
  getters:{
    getPokemon(state) {
      return state.pokemon
    }
  },
  mutations: {
    loadPokemons(state, pokemon) {
      state.pokemon = pokemon
    }
  },
  actions: {
    async loadPokedex({commit}, number) {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${number}`)
        const pokemon = await response.json()
        console.log(pokemon)
        commit('loadPokemons', pokemon)
      }
      catch (error) {
        console.log(error)
      }
    }
  }
})
