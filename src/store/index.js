import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'

Vue.use(Vuex)

// https://cn.vitejs.dev/guide/features.html#glob-import
import modules from './modules';

const store = new Vuex.Store({
  modules,
  getters
})

export default store
