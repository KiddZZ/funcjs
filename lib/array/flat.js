"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 数组扁平化
 * @param arr any[]
 * @param index 拍平层级
 */
function flat(arr, index) {
    if (index === void 0) { index = Infinity; }
    var result = [];
    index--;
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var item = arr_1[_i];
        Array.isArray(item) ? (result = result.concat(index ? flat(item, index) : item)) : result.push(item);
    }
    return result;
}
exports.flat = flat;
