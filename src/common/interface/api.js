import config from "./config";
import { httpRequest } from "../http";

export const wechatLogin = params => {
  return httpRequest("GET", `${config.baseRequestUrl}/wx/login`, params);
};
// 获取校友列表
export const getPage = params => {
  return httpRequest("GET", `${config.baseRequestUrl}/getPage`, params);
};
// 保存/添加工作信息
export const save = params => {
  return httpRequest("POST", `${config.baseRequestUrl}/save`, params);
};
export const del = params => {
  return httpRequest(
    "POSTFORM",
    `${config.baseRequestUrl}/delete`,
    params
  );
};

