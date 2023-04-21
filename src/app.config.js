export default {
  pages: [
    "pages/index/index",
    "pages/home/index"
  ],
  subpackages: [

  ],

  tabBar: {
    list: [
      {
        iconPath: "assets/search@2x.png",
        pagePath: "pages/index/index",
        text: "text",
        selectedIconPath: "assets/search-selected@2x.png"
      },
      {
        iconPath: "assets/home@2x.png",
        pagePath: "pages/home/index",
        text: "我的",
        selectedIconPath: "assets/home-selected@2x.png"
      }
    ],
    color: "#999",
    selectedColor: "#0E5CFF",
    backgroundColor: "#fff",
    borderStyle: "white"
  },
  networkTimeout: {
    request: 10000,
    downloadFile: 10000
  },
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
    navigationStyle: "custom"
  }
};
