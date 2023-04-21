import Taro from "@tarojs/taro";
import { wechatLogin } from "@api";
import config from "./interface/config";
import store from "../store";
/**
 * @description: 请求公共方法
 * @param {String} url 请求url
 * @param {Object} params 请求参数
 * @param {String} method 请求方法
 * @param {Function} successCallback 请求成功回调函数
 * @param {Function} failCallback 请求失败回调函数
 * @returns void
 */

const header = {
  "content-type": "application/json"
};
export function httpRequest(method, url, params) {
  header.Authorization = Taro.getStorageSync("sessionKey"); //自定义请求头信息
  if (method === "POST" || method === "GET") {
    header["content-type"] = "application/json";
  } else if (method === "POSTFORM") {
    method = "POST";
    header["content-type"] = "application/x-www-form-urlencoded";
  }
  return new Promise(function(resolve, reject) {
    Taro.request({
      method,
      url,
      data: params,
      timeout: config.timeout,
      header: header,
      success: res => {
        if (res.data.code !== "000000") {
          if (res.statusCode === 401) {
            login().then(res => {
              Taro.switchTab({
                url: `/pages/index/index`
              });
              Taro.atMessage({
                message: "用户超时,已重新登录",
                type: "warning"
              });
            });
          } else {
            Taro.atMessage({
              message: res.data.message,
              type: "error"
            });
          }
        } else {
          resolve(res.data);
        }
      },
      fail: err => {
        Taro.atMessage({
          message: err,
          type: "warning"
        });
        reject(err);
      }
    });
  });
}

export function login() {
  return new Promise((resolve, reject) => {
    Taro.setStorageSync("sessionKey", "");
    Taro.login({
      success: res => {
        if (res.code) {
          wechatLogin({
            code: res.code
            // userInfo: Taro.getStorageSync("userInfo")
          })
            .then(loginRes => {
              Taro.setStorageSync("openid", loginRes.data.openid);
              Taro.setStorageSync("sessionKey", loginRes.data.token);
              Taro.setStorageSync("userId", loginRes.data.userId);

              resolve(loginRes);
            })
            .catch(() => {
              Taro.navigateTo({
                url: `/pages/authorization/index`
              });
            });
        }
      },
      fail: wxError => {
        reject(wxError);
      }
    });
  });
}

export async function upload(url, tempPath) {
  return new Promise((resolve, reject) => {
    header.Authorization = Taro.getStorageSync("sessionKey"); //自定义请求头信息
    Taro.uploadFile({
      url: config.baseRequestUrl + url,
      header,
      filePath: tempPath,
      name: "file",
      success: res => {
        resolve(JSON.parse(res.data));
        Taro.showToast({
          title: "上传成功",
          icon: "success"
        });
      },
      fail(res) {
        Taro.showToast({
          title: "上传失败",
          icon: "none"
        });
      }
    });
  });
}

/**
 * 检查登录态是否过期。
 */
export const checkSession = isLoading => {
  return new Promise((resolve, reject) => {
    Taro.checkSession({
      success: res => {
        console.log(res, "ssss");
        // session_key 未过期，并且在本生命周期一直有效
        if (store.state.openid && store.state.sessionKey) {
          // initMtaUserInfo()
          resolve();
        } else {
          // Taro.hideTabBar();
          // login().then(
          //   res => {
          //     resolve(res.data);
          //   },
          //   () => {
          //     reject(wxError);
          //   }
          // );
        }
      },
      fail: () => {
        // session_key 已经失效，需要重新执行登录流程
        login().then(
          res => {
            resolve(res.data);
          },
          () => {
            reject(wxError);
          }
        );
      }
    });
  });
};
