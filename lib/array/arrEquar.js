"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var objEquar_1 = require("../obj/objEquar");
/**
 * 判断两个数组是否相同
 * @param a 数组1
 * @param b 数组2
 */
function arrEquar(a, b) {
    if (!Array.isArray(a) || !Array.isArray(b)) {
        return false;
    }
    else if (a.length !== b.length) {
        return false;
    }
    else {
        var bCopy = JSON.parse(JSON.stringify(b));
        for (var _i = 0, a_1 = a; _i < a_1.length; _i++) {
            var n = a_1[_i];
            if (Object.prototype.toString.call(n) === '[object Object]') {
                var equar = false;
                for (var _a = 0, _b = bCopy.entries(); _a < _b.length; _a++) {
                    var _c = _b[_a], i = _c[0], p = _c[1];
                    if (Object.prototype.toString.call(p) === '[object Object]') {
                        if (objEquar_1.objEquar(n, p)) {
                            equar = true;
                            // 如果相等，需要将bCopy中的obj删除
                            bCopy.splice(i, 1);
                        }
                    }
                }
                if (!equar) {
                    return false;
                }
            }
            else {
                var index = bCopy.indexOf(n);
                if (~index) {
                    bCopy.splice(index, 1);
                }
                else {
                    return false;
                }
            }
        }
        return true;
    }
}
exports.arrEquar = arrEquar;
