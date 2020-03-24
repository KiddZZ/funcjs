import { objEquar } from '../obj/objEquar'

/**
 * 判断两个数组是否相同
 * @param a 数组1
 * @param b 数组2
 */
export function arrEquar(a: any[], b: any[]) {
  if (!Array.isArray(a) || !Array.isArray(b)) {
    return false
  } else if (a.length !== b.length) {
    return false
  } else {
    let bCopy = JSON.parse(JSON.stringify(b))
    for (let n of a) {
      if (Object.prototype.toString.call(n) === '[object Object]') {
        let equar = false
        for (let [i, p] of bCopy.entries()) {
          if (Object.prototype.toString.call(p) === '[object Object]') {
            if (objEquar(n, p)) {
              equar = true
              // 如果相等，需要将bCopy中的obj删除
              bCopy.splice(i, 1)
            }
          }
        }
        if (!equar) {
          return false
        }
      } else {
        const index = bCopy.indexOf(n)
        if (~index) {
          bCopy.splice(index, 1)
        } else {
          return false
        }
      }
    }
    return true
  }
}
