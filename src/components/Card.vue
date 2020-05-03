<template>
   <div class="card" style="width: 24rem;" :id="pokemon.id">
        <img :src="pokemon.sprites.front_default" class="mx-auto" :alt="pokemon.name" width="200">
        <div class="card-body">
        <h3 class="card-title text-center mb-4">{{ pokemon.name }}</h3>
        <div class="row">
            <Features :items="pokemon.types" title="type" />
            <Features :items="pokemon.abilities" title="ability" />
            <StatsTable :stats="pokemon.stats" title="stats" />
        </div>
        </div>
    </div>
</template>

<script>
import Features from "@/components/Features.vue";
import StatsTable from "@/components/StatsTable.vue"
export default {
    name: "Card",
    components:{
        Features,
        StatsTable
    },
    props: {
        pokemon: Object
    }
}
</script>
