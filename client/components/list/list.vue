<<template>
      <div class="cities-list">
      <div class="city-card" v-for="city in getFavoriteCityList">
        <div class="city-card__content">
          <div class="city-card__content__status-icon"
               v-bind:style="{ 'background-image': 'url(' + city.icon + ')' }"></div>
          <div class="city-card__content__condition">{{ city.condition }}</div>
          <div class="city-card__content__temperature"> {{ city.temp }}</div>
          <div class="city-card__content__title"> {{ city.name }}</div>
        </div>
        <button class="city-card__remove"
        @click='removeFromFav(city)'>Remove from fav</button>
      </div>
    </div>
</template>

<script> export default { 
        computed: {
                getFavoriteCityList: function() {
                        return this.$store.state.favoriteCityList;
                }
        },
                methods: {
                        removeFromFav: function (city) {
                                this.$store.commit('removeCity', city);
                        }
                }
        }
</script>