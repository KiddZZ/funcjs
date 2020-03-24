"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 清除obj中undefined项
 * @param {object} obj
 */
function objClearUndefined(obj) {
    const objCopy = Object.assign({}, obj);
    Object.keys(objCopy).map(key => {
        if (objCopy[key] !== 0 && !objCopy[key]) {
            delete objCopy[key];
        }
    });
    return objCopy;
}
exports.default = objClearUndefined;
