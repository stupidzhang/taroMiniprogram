export const hasLetter = str => /[a-z]/i.test(`${str}`);

/**
 * 判断字符串是否以数字开头
 * @param str
 * @returns {boolean}
 */
export const isStartWithNum = str => /^[1-9]/.test(str);
/**判断是否手机号 */
export const isPhone = str => /^1\d{10}$/.test(str);
/**判断是否邮箱 */
export const isEmail = str =>
  /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/.test(str);
