/**
 * 时间格式化  分->时+分
 * @param time 单位：分
 */
export function timeFormat(time) {
  if (time < 60) {
    return time + '分钟'
  } else {
    return `${Math.floor(time / 60)}小时${time % 60}分钟`
  }
}

/**
 * 日期格式化
 * @param date 日期
 * @param format 格式
 */
export function dateFormat(date, fmt) {
  const newDate = new Date(date)
  const o = {
    'M+': newDate.getMonth() + 1, // 月份
    'D+': newDate.getDate(), // 日
    'H+': newDate.getHours(), // 小时
    'm+': newDate.getMinutes(), // 分
    's+': newDate.getSeconds(), // 秒
    'q+': Math.floor((newDate.getMonth() + 3) / 3), // 季度
    S: newDate.getMilliseconds() // 毫秒
  }
  if (/(Y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (newDate.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length))
    }
  }
  return fmt
}

/**
 * 将分为单位的金钱格式化为：元+分
 * @param money 接受一个数字，单位分
 */
export function moneyFormat(money) {
  const yuan = Math.floor(money / 100)
  let fen = Math.floor(money % 100)
  fen = fen < 10 ? '0' + fen : fen
  return { yuan, fen }
}
