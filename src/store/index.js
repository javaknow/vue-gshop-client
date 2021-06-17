import Vue from 'vue'
import Vuex from 'vuex'

import getters from './getters'
import actions from './actions'
import msite from './modules/msite'
import user from './modules/user'
import shop from './modules/shop'


Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    msite,
    user,
    shop
  },
  getters,
  actions
})


