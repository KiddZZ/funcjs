/**
 * 清除对象数组中重复的数据, 根据给出的key清除
 * @param {object} arr
 * @param {string} key
 */
export function objArrRepeat(arr: any[], key: string) {
  var hash: any = {}
  const objArray = arr.reduce(function(item, next) {
    if (!hash[next[key]]) {
      hash[next[key]] = true && item.push(next)
    }
    console.log(hash)
    return item
  }, [])
  return objArray
}
