"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 数组求和
 * @param {*} arr 数组
 */
function sumArr(arr) {
    if (!Array.isArray(arr))
        return;
    return arr.reduce(function (prev, cur) {
        return isNaN(cur) ? prev : prev + +cur;
    }, 0);
}
exports.sumArr = sumArr;
/**
 * 对象数组指定key求和
 * @param {*} arr 数组
 */
function sumObjArr(arr, key) {
    if (!Array.isArray(arr))
        return;
    return arr.reduce(function (prev, cur) {
        return isNaN(cur[key]) ? prev : prev + +cur[key];
    }, 0);
}
exports.sumObjArr = sumObjArr;
