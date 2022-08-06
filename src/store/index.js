import Vue from 'vue'

import Vuex from 'vuex'
import tab from './tab'
import user from './user'

Vue.use(Vuex)
// Vuex允许我们将store分割成模块（module），每个module有自己的state，mutation，action，getter
export default new Vuex.Store({
    modules: {
        tab,
        user
    }
})