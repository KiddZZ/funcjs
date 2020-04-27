/**
 * 数组求和
 * @param {*} arr 数组
 */
export function sumArr(arr: number[]) {
  if (!Array.isArray(arr)) return
  return arr.reduce(function(prev, cur) {
    return isNaN(cur) ? prev : prev + +cur
  }, 0)
}

/**
 * 对象数组指定key求和
 * @param {*} arr 数组
 */
export function sumObjArr(arr: number[], key) {
  if (!Array.isArray(arr)) return
  return arr.reduce(function(prev, cur) {
    return isNaN(cur[key]) ? prev : prev + +cur[key]
  }, 0)
}
