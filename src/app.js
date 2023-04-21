import Vue from "vue";
import "./app.scss";

import TaroUiVue from "taro-ui-vue";
import "taro-ui-vue/dist/style/index.scss";
import Taro from "@tarojs/taro";
import { Current } from "@tarojs/taro";
import { login } from "@common/http.js";
import store from "./store";

async function setHeight() {
  let data = {};
  await Taro.getSystemInfo({}).then(res => {
    Taro.$navBarMarginTop = res.statusBarHeight || 0;
    data = res;
  });
  return data;
}
Vue.use(TaroUiVue);
Vue.prototype.$Taro = Taro;

Vue.prototype.$router = Current.router;
// vuex数据状态管理
Vue.prototype.$store = store;

const App = {
  store,
  onShow(options) {
    // wx.chooseImage回调会执行到这里
    // var pages = getCurrentPages();
    // if (!pages.length) {
    //   setHeight().then(() => {
    //     login().then(res => {
    //       if (res.data.isNew) {
    //         Taro.navigateTo({
    //           url: `/pages/authorization/index`
    //         });
    //       } else {
    //         Taro.switchTab({
    //           url: `/pages/index/index`
    //         });
    //       }
    //     }).catch(()=>{
    //       Taro.navigateTo({
    //         url: `/pages/authorization/index`
    //       });
    //     });
    //   });
    // }
  },

  render(h) {
    // this.$slots.default 是将要会渲染的页面
    return h("block", this.$slots.default);
  }
};

export default App;
