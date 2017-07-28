<template>
    <div id="app">
        <div class="page">
            <ul id="cities">
                <li v-for="city in chosenCities">
                    {{ city }}
                </li>
            </ul>
        </div>

        <hr>
        <input type="text" @input="setAndFilter($event)">
        <ul id="cities">
            <!--<li v-for="city in arr">-->
                <!--{{ city }}-->
            <!--</li>-->
        </ul>
    </div>
</template>

<script>
    import City from 'components/City';
    import Vue from 'vue';

    export default {
        components: {
            City
        },
        computed: {
            chosenCities() {
                return this.$store.state.chosenCities
            },
            cities() {
                return this.$store.state.cities
            },
            filteredItems() {
                return this.$store.state.cities.filter(city => {
                    return city;
                })
            }
        },
        methods: {
            setAndFilter(event) {
                var regExp = new RegExp(event.target.value, "gi");

                const arr = this.$store.state.cities.filter(city => {
                    return regExp.test(city);
                });

                return arr;
            }
        }
    }
</script>