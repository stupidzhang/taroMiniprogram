import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate"; // 引入vuex-persistedstate，将vuex的数据持久化到本地
import Taro from "@tarojs/taro";
import userModule from "./userModule";
import getters from "./getters";

Vue.use(Vuex);

export default new Vuex.Store({
  getters,
  modules: {
    userModule
  }
});
