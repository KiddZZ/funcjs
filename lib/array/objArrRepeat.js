"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 清除对象数组中重复的数据, 根据给出的key清除
 * @param {object} arr 数组
 * @param {string} key key
 */
function objArrRepeat(arr, key) {
    var hash = {};
    var objArray = arr.reduce(function (item, next) {
        if (!hash[next[key]]) {
            hash[next[key]] = true && item.push(next);
        }
        console.log(hash);
        return item;
    }, []);
    return objArray;
}
exports.objArrRepeat = objArrRepeat;
