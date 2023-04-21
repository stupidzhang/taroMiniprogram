<template>
  <view class="search">
    <view class="search_pop">
    <view>test</view>
      <view class="search-bar">
        <AtInput
          class="search-bar_input"
          name="value1"
          type="text"
          title=""
          placeholder="搜索"
          :value="keywords"
          :onChange="onChange"
          :onConfirm="onActionClick"
        />
        <image
          class="search-bar_img"
          @tap="onActionClick"
          src="@assets/searchbar@2x.png"
        ></image>
      </view>
    </view>
    <AtMessage />
  </view>
</template>

<script>
import {  wechatLogin } from "@api";
import { login, checkSession } from "@common/http";
import "./index.scss";

export default {
  components: {},
  data() {
    return {
      keywords: "",
      isShow: false
    };
  },
  onShow() {
    this.keywords = "";
  },
  computed: {},
  methods: {
    onChange(value, event) {
      this.keywords = value;
    },
    onActionClick() {}
  }
};
</script>
