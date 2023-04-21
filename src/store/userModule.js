export default {
  state: {
    appId: "wx111", // 应用的唯一标识
    openid: null, // 一个用户打开一个微信应用（公众号、小程序）的唯一标识
    userInfo: null // 微信开放数据的用户信息
  },
  mutations: {
    SET_USER_INFO(state, v) {
      state.userInfo = v;
    }
  },
  actions: {}
};
