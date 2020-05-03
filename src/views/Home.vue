<template>
  <div class="home container">
    <div class="row">
      <div class="col-md-12 my-3">
        <h1 class="text-center">Pokedex</h1>
      </div>
      <div class="col-md-12 d-flex justify-content-center my-3">
        <InputSearch @search-Pokemon="searchPokemon"/>
      </div>
      <div class="col-md-12 d-flex justify-content-center">
       <Card :pokemon="pokemon"/>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import InputSearch from "@/components/InputSearch.vue";
export default {
  name: 'Home',
  components:{
    Card,
    InputSearch
  },
  data(){
    return {
      number: ''
    }
  },
  methods: {
    getRandom() {
      this.number = Math.floor(Math.random() * (721 - 1) + 1)
    },
    searchPokemon(dataInput) {
      this.$store.dispatch('loadPokedex', dataInput)
    }
  },
  computed: {
    pokemon() {
      return this.$store.getters.getPokemon
    }
  },
  created() {
    this.getRandom()
  },
  beforeMount() {
    this.$store.dispatch('loadPokedex',this.number)
  }
}
</script>

<style>
  .card-title, .table td, li, h5 {
    text-transform: capitalize;
  }
</style>