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
    var newDate;
    if (!date) {
        newDate = new Date();
    }
    else if (Object.prototype.toString.call(date) === '[object Date]') {
        newDate = date;
    }
    else if (Object.prototype.toString.call(date) === '[object Number]') {
        newDate = new Date(date);
    }
    else if (Object.prototype.toString.call(date) === '[object String]') {
        newDate = new Date(date.replace(/\-/g, '/'));
    }
    else {
        throw new Error('时间解析失败');
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
/**
 * 获取倒计时
 * @param time 接受一个时间
 * @param type 默认时分秒  1-天时分秒
 */
function getCountDown(time, type) {
    if (type === void 0) { type = null; }
    var newDate;
    if (!time) {
        return null;
    }
    try {
        if (Object.prototype.toString.call(time) === '[object Date]') {
            newDate = time.getTime();
        }
        else if (Object.prototype.toString.call(time) === '[object Number]') {
            newDate = new Date(time).getTime();
        }
        else if (Object.prototype.toString.call(time) === '[object String]') {
            newDate = new Date(time.replace(/\-/g, '/')).getTime();
        }
        else {
            return null;
        }
    }
    catch (err) {
        throw new Error('时间解析失败');
    }
    var now = new Date().getTime();
    if (newDate < now) {
        console.warn('时间已超过当前时间');
        return false;
    }
    var diff_time = (newDate - now) / 1000;
    var h = Math.floor(diff_time / 3600);
    var m = Math.floor((diff_time / 60) % 60);
    var s = Math.floor(diff_time % 60);
    if (!type) {
        return {
            h: h,
            m: m,
            s: s
        };
    }
    else {
        var d = Math.floor(h / 24);
        h = h % 24;
        return {
            d: d,
            h: h,
            m: m,
            s: s
        };
    }
}
exports.getCountDown = getCountDown;
