/* Vue全局过滤器 */
import Vue from "vue";

/* 格式化手机号 */
Vue.filter("mobileFormat", function(val) {
  if (!val || val.length != 11) {
    return val;
  }
  return val.substr(0, 4) + "****" + val.substr(7, 4);
});

/* 格式化整数 */
Vue.filter("numFormat", function(value, addZero) {
  if (!value) return addZero ? "0.00" : "0";

  let intPart = Number(value) - (Number(value) % 1); //获取整数部分
  let data = intPart.toString().replace(/(\d)(?=(?:\d{3})+$)/g, "$1,");
  return addZero ? data + ".00" : data; //将整数部分逢三一断
});

/* 截取文字 */
Vue.filter("subTruncate", function(value, len = 6) {
  if (!value) return value;

  if (value.length <= len) {
    return value;
  }

  return value.substr(0, len) + "...";
});

Vue.filter("formatDate", function(time, format = "yyyy.MM.dd") {
  if (
    typeof time === "string" &&
    time.indexOf("+") > -1 &&
    time.indexOf("T") > -1
  ) {
    time = time.substr(0, 10);
  }
  const date = new Date(time);
  if (!date.getTime()) return "";
  const o = {
    "M+": date.getMonth() + 1,
    "d+": date.getDate(),
    "h+": date.getHours(),
    "m+": date.getMinutes(),
    "s+": date.getSeconds(),
    "q+": Math.floor((date.getMonth() + 3) / 3),
    S: date.getMilliseconds()
  };
  if (/(y+)/.test(format)) {
    format = format.replace(
      RegExp.$1,
      (date.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  }
  for (let k in o) {
    if (new RegExp("(" + k + ")").test(format)) {
      format = format.replace(
        RegExp.$1,
        RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)
      );
    }
  }
  return format;
});
