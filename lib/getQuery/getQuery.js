"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 获取url上？后面的参数
 * @param name queryKey
 */
function getQueryString(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var search = window.location.href.substr(window.location.href.indexOf('?'));
    var r = search.substr(1).match(reg);
    if (r != null) {
        return unescape(r[2]);
    }
    return null;
}
exports.default = getQueryString;
