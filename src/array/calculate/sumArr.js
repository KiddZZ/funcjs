/**
 * 数组求和
 * @param {*} arr
 */
export function sumArr(arr) {
  if (!Array.isArray(arr)) return
  return arr.reduce(function(prev, cur) {
    return isNaN(cur) ? prev : prev + +cur
  }, 0)
}
