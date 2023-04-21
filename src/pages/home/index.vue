<template>
  <view class="home">
    我的
    <AtMessage />
  </view>
</template>

<script>
import "./index.scss";
export default {
  components: {},
  data() {
    return {
      contentHeight: 0
    };
  },

  computed: {},
  created() {},
  onShow() {},
  onReady() {
    // 别的生命周期高度不准
    this.contentHeight = `${this.$Taro.getSystemInfoSync().windowHeight -
      this.$Taro.$navBarMarginTop -
      260}PX`;
  },
  methods: {}
};
</script>
