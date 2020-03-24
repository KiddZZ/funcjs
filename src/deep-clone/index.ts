const mapTag = '[object Map]'
const setTag = '[object Set]'
const arrayTag = '[object Array]'
const objectTag = '[object Object]'

const boolTag = '[object Boolean]'
const dateTag = '[object Date]'
const errorTag = '[object Error]'
const numberTag = '[object Number]'
const regexpTag = '[object RegExp]'
const stringTag = '[object String]'
const symbolTag = '[object Symbol]'

const otherTags = [dateTag, errorTag, numberTag, stringTag]
const deepTags = [mapTag, setTag, arrayTag, objectTag]

// 判断类型
function getType(original: any) {
  return Object.prototype.toString.call(original)
}

// 判断是否为引用类型
function isObject(original: any) {
  const type = typeof original
  return original !== null && type === 'object'
}

// 初始化被克隆的对象
function initCopy(original: any) {
  const Ctor = original.constructor
  return new Ctor()
}

/**
 * 深拷贝
 * @param original 
 * @param map 
 */
function deepClone(original: any, map = new WeakMap()) {
  const type = getType(original)

  // 判断引用类型,原始数据直接返回
  // copy function是没有实际应用场景的，两个对象使用同一个引用地址的function没有任何问题，所以这里直接返回
  if (!isObject(original)) {
    return original
  }

  if (deepTags.includes(type)) {
    let targetClone = initCopy(original)

    // 处理环
    if (map.get(original)) {
      return map.get(original)
    }
    // 处理Set
    if (type === setTag) {
      original.forEach((value: any) => {
        targetClone.add(value)
      })
    }
    // 处理map
    if (type === mapTag) {
      original.forEach((value: any, key: any) => {
        targetClone.set(key, value)
      })
    }
    map.set(original, targetClone)
    Object.keys(original).forEach(key => {
      targetClone[key] = deepClone(original[key], map)
    })
    return targetClone
  } else {
    // 处理其他数据类型
    const Ctor = original.constructor
    if (otherTags.includes(type)) {
      return new Ctor(original)
    }
    // 处理Boolean
    if (type === boolTag) {
      return new original.constructor(original.valueOf())
    }
    // 处理Symbol
    if (type === symbolTag) {
      return Object(Symbol.prototype.valueOf.call(original))
    }
    // 处理reg
    if (type === regexpTag) {
      const reFlags = /\w*$/
      const result = new original.constructor(original.source, reFlags.exec(original))
      result.lastIndex = original.lastIndex
      return result
    }
    return null
  }
}

export default deepClone
