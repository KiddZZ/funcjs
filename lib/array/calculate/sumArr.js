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
