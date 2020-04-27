/**
 * 深拷贝
 * @param original
 * @param map
 */
declare function deepClone(original: any, map?: WeakMap<object, any>): any;
export default deepClone;
