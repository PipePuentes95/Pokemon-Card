<template>
    <div class="input-group mb-3">
        <input
            type="text"
            class="form-control"
            placeholder="Search Pokemon"
            v-model="dataInput"
        >
        <div class="input-group-append">
            <button
                class="btn btn-outline-success"
                type="button"
                @click="setPokemon(dataInput)"
            >
                Search
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: "InputSearch",
    data() {
        return {
            dataInput: ""
        }
    },
    methods: {
        setPokemon(dataInput) {
            const lowerData = dataInput.toLowerCase()
            this.$emit('search-Pokemon', lowerData)
        }
    }
}
</script>
