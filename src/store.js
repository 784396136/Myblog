import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    search_info: '',
  },
  mutations: {
    // 点击滚轮到正文区域
    content(){
      $("html,body").animate({scrollTop:'270px'},650)
    }
  },
  actions: {

  }
})
