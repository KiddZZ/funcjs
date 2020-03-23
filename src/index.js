// 深拷贝
import deepClone from './deep-clone'
// 精度
import precision from './precision'
// 防抖
import { debounce, debounceAt, throttleAt, throttle } from './debounce'
// 清除obj中的undefined
import objClearUndefined from './objClearUndefined'
// 各种format
import { timeFormat, dateFormat, moneyFormat } from './format'
// canvas换行
import { lineClamp } from './canvas/lineClamp'
// 数组求和
import { sumArr } from './array/calculate'
// 数组相等
import { arrEquar } from './array/arrEquar'
// 对象相等
import { objEquar } from './obj/objEquar'

export {
  deepClone,
  precision,
  debounce,
  objClearUndefined,
  timeFormat,
  dateFormat,
  moneyFormat,
  throttleAt,
  throttle,
  debounceAt,
  lineClamp,
  sumArr,
  arrEquar,
  objEquar
}
