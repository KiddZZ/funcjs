/**
 * 装饰器版防抖
 * @param delay 延迟时间
 * @param immediately 是否立即执行(会先执行一次，再进入定时器模式)
 */
const debounceAt = function(delay = 300, immediately: boolean) {
  return function(target: any, name: string, descriptor: any) {
    let timer: any = null
    let isFirst = immediately

    // high order function
    if (!descriptor || (arguments.length === 1 && typeof target === 'function')) {
      return createDebounce(target)
    }

    function createDebounce(fn: Function) {
      return function debounce() {
        clearTimeout(timer)
        if (immediately) {
          fn.apply(this, arguments)
          immediately = false
          isFirst = true
        }
        if (isFirst) {
          timer = setTimeout(() => {
            isFirst = false
            immediately = true
          }, delay)
        } else {
          timer = setTimeout(() => {
            immediately = false
            fn.apply(this, arguments)
          }, delay)
        }
      }
    }

    // 修饰类内的箭头函数
    if (descriptor.initializer) {
      return {
        enumerable: false,
        configurable: true,
        get: function() {
          return createDebounce(descriptor.initializer.call(this))
        }
      }
    }

    return descriptor
  }
}

/**
 * 防抖
 * @param fn 需要调用的function
 * @param {number} delay 延迟的时间
 */
const debounce = (fn: Function, delay = 300) => {
  let timer: any = null
  return function() {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn(this, arguments)
    }, delay)
  }
}

/**
 * 装饰器版节流
 * @param {number} delay 延迟时间
 * @param immediately 是否立即执行
 */
const throttleAt = function(delay = 300, immediately: boolean) {
  return function(target: any, name: string, descriptor: any) {
    // high order function
    if (!descriptor || (arguments.length === 1 && typeof target === 'function')) {
      return createThrottle(target)
    }
    let canRun = true
    let isFirst = immediately

    function createThrottle(fn: Function) {
      return function throttle() {
        if (!canRun) return
        if (immediately) {
          fn.apply(this, arguments)
          immediately = false
          isFirst = true
        }
        if (isFirst) {
          setTimeout(() => {
            isFirst = false
            immediately = true
          }, delay)
        } else {
          canRun = false
          setTimeout(() => {
            fn.apply(this, arguments)
            canRun = true
          }, delay)
        }
      }
    }

    // 修饰类内的箭头函数
    if (descriptor.initializer) {
      return {
        enumerable: false,
        configurable: true,
        get: function() {
          return createThrottle(descriptor.initializer.call(this))
        }
      }
    }

    return descriptor
  }
}

/**
 * 节流
 * @param fn 需要调用的function
 * @param {number} delay 延迟的时间默认300
 */
const throttle = (fn: Function, delay = 300) => {
  let canRun = true // 通过闭包保存一个标记
  return function() {
    if (!canRun) return // 在函数开头判断标记是否为true，不为true则return
    canRun = false // 立即设置为false
    setTimeout(() => {
      // 将外部传入的函数的执行放在setTimeout中
      fn.apply(this, arguments)
      // 最后在setTimeout执行完毕后再把标记设置为true(关键)表示可以执行下一次循环了。当定时器没有执行的时候标记永远是false，在开头被return掉
      canRun = true
    }, delay)
  }
}

export { debounceAt, debounce, throttleAt, throttle }
