"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var arrEquar_1 = require("../array/arrEquar");
/**
 * 判断两个对象是否相等
 * @param x obj1
 * @param y obj2
 */
exports.objEquar = function (x, y) {
    if (x === y) {
        return true;
    }
    if (!(Object.prototype.toString.call(x) === '[object Object]') ||
        !(Object.prototype.toString.call(y) === '[object Object]')) {
        return false;
    }
    if (Object.keys(x).length !== Object.keys(y).length) {
        return false;
    }
    for (var p in x) {
        if (x.hasOwnProperty(p)) {
            if (!y.hasOwnProperty(p)) {
                return false;
            }
            // 如果当前属性值是对象
            if (Object.prototype.toString.call(x[p]) === '[object Object]') {
                if (Object.prototype.toString.call(y[p]) !== '[object Object]') {
                    return false;
                }
                else {
                    if (!exports.objEquar(x[p], y[p])) {
                        return false;
                    }
                }
            }
            else if (Array.isArray(x[p])) {
                if (!Array.isArray(y[p])) {
                    return false;
                }
                else {
                    if (!arrEquar_1.arrEquar(x[p], y[p])) {
                        return false;
                    }
                }
            }
            else {
                if (x[p] !== y[p]) {
                    return false;
                }
            }
        }
    }
    return true;
};
