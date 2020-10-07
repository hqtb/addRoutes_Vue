import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import {
  GetTree
} from '../tools/util'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    getRouterTree: [],
  },
  mutations: {
    handlerTree(state, payload) {

      state[payload['key']] = payload['val']
      // debugger
      console.log(state)
    }
  },
  actions: {
    async getHandleTree({
      commit
    }, payload) {
      let res = await axios.get('http://localhost:3000/getALL');
      // 
      res.data.obj.forEach((v, i) => {
        v.name = v.name;
        v.path = v.path,
          v.component = () => import(`@/views/${v.name}.vue`);
      })
      let resobkj = GetTree(res.data.obj, 0)
      resobkj.forEach((item) => {
        if (!item.name || !item.tilte || !item.path) {
          delete item['pid']
          delete item['id']
        }
      })

      commit('handlerTree', {
        key: "getRouterTree",
        val: resobkj
      })
      // debugger
      // 再次处理成tree
    }
  },
  modules: {}
})