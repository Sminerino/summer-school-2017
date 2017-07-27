import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import { apiKey } from '../../config.json'

Vue.use(Vuex);

const state = {
    cities: [],
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
    setCities (state, data) {
        state.cities = [
            'Perm',
            'Paris'
        ]
    }
};

const actions = {
    incrementAsync ({ commit }) {
        setTimeout(() => {
            commit('INCREMENT')
        }, 200)
    },

    getWeather ({ commit }) {
        axios
            .get(`http://api.apixu.com/v1/current.json?key=${apiKey}&q=${state.city}`)
            .then(
                (res) => {
                    commit('setWeather', res.data);
                }
            )
            .catch(() => commit('setNotFound'));
    },
    getCities ({ commit }) {
        axios.get(`/city.list.json`)
            .then(
                (res) => {
                    commit('setCities', res)
                }
            )
    }
};

const store = new Vuex.Store({
    state,
    mutations,
    actions
});

export default store
