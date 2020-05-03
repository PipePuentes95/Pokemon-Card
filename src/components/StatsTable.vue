<template>
    <div class="col-md-12">
        <h5>{{ title }}</h5>
        <table class="table text-left table-sm">
            <tbody>
                <tr v-for="(stat, index) in stats" :key="index">
                    <td>{{ stat.stat.name }}</td>
                    <td>{{ stat.base_stat }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name:"StatsTable",
    props: {
        stats: Array,
        title: String
    }
}
</script>
