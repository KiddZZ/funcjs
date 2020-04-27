/**
 * 数组扁平化
 * @param arr any[]
 * @param index 拍平层级
 */
export function flat(arr: any[], index: number = Infinity) {
  let result = []
  index--
  for (const item of arr) {
    Array.isArray(item) ? (result = result.concat(index ? flat(item, index) : item)) : result.push(item)
  }
  return result
}
