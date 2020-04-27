"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 时间格式化  分->时+分
 * @param time 单位：分
 */
function timeFormat(time, type) {
    if (!time) {
        return time;
    }
    if (time < 60) {
        return time + '分钟';
    }
    else {
        if (!type) {
            return Math.floor(time / 60) + "\u5C0F\u65F6" + time % 60 + "\u5206\u949F";
        }
        else {
            return {
                h: Math.floor(time / 60),
                min: time % 60
            };
        }
    }
}
exports.timeFormat = timeFormat;
/**
 * 日期格式化
 * @param date 日期
 * @param format 格式
 */
function dateFormat(date, fmt) {
    if (date === void 0) { date = ''; }
    var newDate;
    if (!date) {
        newDate = new Date();
    }
    else {
        newDate = new Date(date.replace(/\-/g, '/'));
    }
    var o = {
        'M+': newDate.getMonth() + 1,
        'D+': newDate.getDate(),
        'H+': newDate.getHours(),
        'm+': newDate.getMinutes(),
        's+': newDate.getSeconds(),
        'q+': Math.floor((newDate.getMonth() + 3) / 3),
        'S+': newDate.getMilliseconds() // 毫秒
    };
    if (/(Y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (newDate.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
        if (new RegExp('(' + k + ')').test(fmt)) {
            fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
        }
    }
    return fmt;
}
exports.dateFormat = dateFormat;
/**
 * 将分为单位的金钱格式化为：元+分
 * @param money 接受一个数字，单位分
 */
function moneyFormat(money) {
    if (!(money === +money)) {
        console.warn('money不是一个数字');
        return {};
    }
    var yuan = Math.floor(money / 100);
    var fen = Math.floor(money % 100);
    fen = fen < 10 ? '0' + fen : fen;
    return { yuan: yuan, fen: fen };
}
exports.moneyFormat = moneyFormat;
