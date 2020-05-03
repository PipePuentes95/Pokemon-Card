<template>
    <div class="col-sm-6">
        <h5>{{ title }}</h5>
        <ul>
            <li v-for="(item, index) in items" :key="index">
                {{ item[title].name }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "Features",
    props: {
        items: Array,
        title: String
    }
}
</script>
