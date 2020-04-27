/**
 * 装饰器版防抖
 * @param delay 延迟时间
 * @param immediately 是否立即执行(会先执行一次，再进入定时器模式)
 */
declare const debounceAt: (delay: number, immediately: boolean) => (target: any, name: string, descriptor: any) => any;
/**
 * 防抖
 * @param fn 需要调用的function
 * @param {number} delay 延迟的时间
 */
declare const debounce: (fn: Function, delay?: number) => (...rest: any[]) => void;
/**
 * 装饰器版节流
 * @param {number} delay 延迟时间
 * @param immediately 是否立即执行
 */
declare const throttleAt: (delay: number, immediately: boolean) => (target: any, name: string, descriptor: any) => any;
/**
 * 节流
 * @param fn 需要调用的function
 * @param {number} delay 延迟的时间默认300
 */
declare const throttle: (fn: Function, delay?: number) => (...rest: any[]) => void;
export { debounceAt, debounce, throttleAt, throttle };
