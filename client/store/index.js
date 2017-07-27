import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import { apiKey } from '../../config.json'

Vue.use(Vuex);

const state = {
    list: [
        'Perm',
        'Paris'
    ]
};

const mutations = {}

const actions = {};

const store = new Vuex.Store({
    state,
    mutations,
    actions
});

export default store
