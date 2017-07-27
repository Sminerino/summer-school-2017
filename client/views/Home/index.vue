<template>
    <div class="page">
        <ul id="cities">
            <li v-for="city in cities">
                {{ city }}
            </li>
        </ul>
    </div>
</template>

<script>
import City from 'components/City'

export default {
    components: {
        City
    },
    computed: {
        cities() {
            return this.$store.cities
        }
    },
    mounted() {
        this.$store.dispatch('getCities');
    }
}
</script>