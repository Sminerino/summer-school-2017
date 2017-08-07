import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const state = {
            favoriteCityList: [
                                {
                                        name: 'Пермь',
                                        temp: '+12',
                                        condition: 'Clear',
                                        icon: '//cdn.apixu.com/weather/64x64/night/113.png'
                                },
                                {
                                        name: 'Москва',
                                        temp: '+15',
                                        condition: 'Partly cloudy',
                                        icon: '//cdn.apixu.com/weather/64x64/day/116.png'
                                },
                                {
                                        name: 'Санкт-Петербург',
                                        temp: '+12',
                                        condition: 'Light rain shower',
                                        icon: '//cdn.apixu.com/weather/64x64/day/353.png'
                                },
                        ],
      };
      const mutations = {
                  removeCity (state, city) {
                        state.favoriteCityList.splice(state.favoriteCityList.indexOf(city),1);
                  }
      };
      const store = new Vuex.Store({
      state,
      mutations
});
export default store
