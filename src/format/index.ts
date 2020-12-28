/**
 * 时间格式化  分->时+分
 * @param time 单位：分
 */
export function timeFormat(time: number, type: string) {
  if (!time) {
    return time
  }
  if (time < 60) {
    return time + '分钟'
  } else {
    if (!type) {
      return `${Math.floor(time / 60)}小时${time % 60}分钟`
    } else {
      return {
        h: Math.floor(time / 60),
        min: time % 60,
      }
    }
  }
}

/**
 * 日期格式化
 * @param date 日期
 * @param format 格式
 */
export function dateFormat(date, fmt: string) {
  let newDate
  if (!date) {
    newDate = new Date()
  } else if (Object.prototype.toString.call(date) === '[object Date]') {
    newDate = date
  } else if (Object.prototype.toString.call(date) === '[object Number]') {
    newDate = new Date(date)
  } else if (Object.prototype.toString.call(date) === '[object String]') {
    newDate = new Date(date.replace(/\-/g, '/'))
  } else {
    throw new Error('时间解析失败')
  }
  const o: any = {
    'M+': newDate.getMonth() + 1, // 月份
    'D+': newDate.getDate(), // 日
    'H+': newDate.getHours(), // 小时
    'm+': newDate.getMinutes(), // 分
    's+': newDate.getSeconds(), // 秒
    'q+': Math.floor((newDate.getMonth() + 3) / 3), // 季度
    'S+': newDate.getMilliseconds(), // 毫秒
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
export function moneyFormat(money: number) {
  if (!(money === +money)) {
    console.warn('money不是一个数字')
    return {}
  }
  const yuan = Math.floor(money / 100)
  let fen: string | number = Math.floor(money % 100)
  fen = fen < 10 ? '0' + fen : fen
  return { yuan, fen }
}

/**
 * 获取倒计时
 * @param time 接受一个时间
 * @param type 默认时分秒  'day'-天时分秒 'format'-'加0的时分秒'  'dayformat'-'加0的天时分秒'
 */
export function getCountDown(time, type = null) {
  let newDate
  if (!time) {
    return null
  }
  try {
    if (Object.prototype.toString.call(time) === '[object Date]') {
      newDate = time.getTime()
    } else if (Object.prototype.toString.call(time) === '[object Number]') {
      newDate = new Date(time).getTime()
    } else if (Object.prototype.toString.call(time) === '[object String]') {
      newDate = new Date(time.replace(/\-/g, '/')).getTime()
    } else {
      return null
    }
  } catch (err) {
    throw new Error('时间解析失败')
  }
  const now = new Date().getTime()
  if (newDate < now) {
    console.warn('时间已超过当前时间')
    return false
  }
  const diff_time = (newDate - now) / 1000
  let h = Math.floor(diff_time / 3600)
  let m = Math.floor((diff_time / 60) % 60)
  let s = Math.floor(diff_time % 60)

  const date = { h, m, s }
  let d = Math.floor(h / 24)
  const dayDate = { d, h: h % 24, m, s }
  if (!type) {
    return date
  } else if (type === 'format') {
    return countdownFormat(date)
  } else if (type === 'dayformat') {
    return countdownFormat(dayDate)
  } else {
    return dayDate
  }
}

function countdownFormat(date) {
  return date
    ? {
        ...date,
        h: date.h < 10 ? '0' + date.h : date.h,
        m: date.m < 10 ? '0' + date.m : date.m,
        s: date.s < 10 ? '0' + date.s : date.s,
      }
    : false
}
