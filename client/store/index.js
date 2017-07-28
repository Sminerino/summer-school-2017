import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import { apiKey } from '../../config.json';
import cities from '../../db.json';

Vue.use(Vuex);

const state = {
    cities: cities,
    chosenCities: [],
    currentCity: {
        temperature: '',
        city: '',
        description: '',
        imgUrl: ''
    }
};

const mutations = {
    setWeather (state, data) {
        state.currentCity.temperature = data.current.temp_c;
        state.currentCity.description = data.current.condition.text;
        state.currentCity.imgUrl = data.current.condition.icon;
    },
    setCity (state, cityName) {
        state.currentCity = cityName;
    },
    setNotFound (state) {
        state.currentCity = null;
    },
    addCitiy (state, data) {
        state.chosenCities = []
    }
};

const actions = {
    getWeather ({ commit }) {
        axios
            .get(`http://api.apixu.com/v1/current.json?key=${apiKey}&q=${state.city}`)
            .then(
                (res) => {
                    commit('setWeather', res.data);
                }
            )
            .catch(() => commit('setNotFound'));
    }
};

const store = new Vuex.Store({
    state,
    mutations,
    actions
});

export default store
