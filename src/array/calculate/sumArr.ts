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
