<template>
  <view class="authorization">
    <image
      class="background"
      src="http://minio-test.yscredit.com/alumni-association/front/background.png"
    ></image>
    <view class="authorization_pop">
      <image class="title-img" src="@assets/logo-default.png"></image>
      <!-- <AtSearchBar class="authorization_pop-query" :value="keywords" /> -->
    </view>
    <view class="the-mask">
      <view class="authorization_bottom">
        <view class="authorization_bottom_text">请先登录</view>
        <button class="btn" @tap="getUserInfo">
          微信授权登录
        </button>
      </view>
    </view>
    <AtMessage />
  </view>
</template>

<script>
import { wechatLogin } from "@api";
import { login, checkSession } from "@common/http";
import "./index.scss";

export default {
  components: {},
  data() {
    return {
      denied: false
    };
  },
  onShow() {},
  computed: {},
  methods: {
    getUserInfo() {
      const that = this;
      wx.getUserProfile({
        desc: "获取你的昵称、头像、地区及性别", // 不写不弹提示框
        success: res => {
          this.$Taro.setStorageSync("userInfo", res.userInfo);
          login().then(res => {
            this.$Taro.navigateTo({
              url: `/pages/home/index`
            });
          });
        },
        fail: res => {
          wx.showToast({
            title: "您拒绝了授权",
            icon: "none"
          });
          // that.denied = true;
        }
        // complete: res => {
        //   if (that.denied) {
        //     this.$Taro.navigateTo({
        //       url: `/pages/perfectInfo/index`
        //     });
        //   }
        // }
      });
    }
  }
};
</script>
