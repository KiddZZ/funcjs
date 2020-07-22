"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 深拷贝
var deep_clone_1 = require("./deep-clone");
exports.deepClone = deep_clone_1.default;
// 精度
var precision_1 = require("./precision");
exports.precision = precision_1.default;
// 防抖
var debounce_1 = require("./debounce");
exports.debounce = debounce_1.debounce;
exports.debounceAt = debounce_1.debounceAt;
exports.throttleAt = debounce_1.throttleAt;
exports.throttle = debounce_1.throttle;
// 清除obj中的undefined
var objClearUndefined_1 = require("./objClearUndefined");
exports.objClearUndefined = objClearUndefined_1.default;
// 获取url中的参数
var getQuery_1 = require("./getQuery/getQuery");
exports.getQuery = getQuery_1.default;
// 各种format
var format_1 = require("./format");
exports.timeFormat = format_1.timeFormat;
exports.dateFormat = format_1.dateFormat;
exports.moneyFormat = format_1.moneyFormat;
exports.getCountDown = format_1.getCountDown;
// canvas换行
var lineClamp_1 = require("./canvas/lineClamp");
exports.lineClamp = lineClamp_1.lineClamp;
// 数组求和
var sumArr_1 = require("./array/calculate/sumArr");
exports.sumArr = sumArr_1.sumArr;
exports.sumObjArr = sumArr_1.sumObjArr;
// 数组扁平化
var flat_1 = require("./array/flat");
exports.flat = flat_1.flat;
// 数组相等
var arrEquar_1 = require("./array/arrEquar");
exports.arrEquar = arrEquar_1.arrEquar;
// 对象数组根据key去重
var objArrRepeat_1 = require("./array/objArrRepeat");
exports.objArrRepeat = objArrRepeat_1.objArrRepeat;
// 对象相等
var objEquar_1 = require("./obj/objEquar");
exports.objEquar = objEquar_1.objEquar;
