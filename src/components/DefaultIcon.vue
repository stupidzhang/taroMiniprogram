<template>
  <view class="default-icon" :style="sizeWidth">
    <view
      class="default-icon_title"
      :style="size === 'large' && 'line-height:70PX'"
      >{{ title }}</view
    >
  </view>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    title: {
      type: String,
      default: "无"
    },
    size: {
      type: String,
      default: "middle"
    }
  },
  computed: {
    sizeWidth() {
      if (this.size === "large")
        return {
          width: 70 + "PX",
          height: 70 + "PX",
          borderRadius: 70 + "PX",
          fontSize: 26 + "PX"
        };
      return {};
    }
  },
  methods: {}
};
</script>
<style lang="scss">
.default-icon {
  width: 84rpx;
  height: 84rpx;
  border-radius: 84rpx;
  background: #0e5cff;
  font-size: 36rpx;
  &_title {
    color: #fff;
    line-height: 84rpx;
    text-align: center;
  }
}
</style>
