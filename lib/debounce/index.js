"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 装饰器版防抖
 * @param delay 延迟时间
 * @param immediately 是否立即执行(会先执行一次，再进入定时器模式)
 */
var debounceAt = function (delay, immediately) {
    if (delay === void 0) { delay = 300; }
    if (immediately === void 0) { immediately = true; }
    return function (target, name, descriptor) {
        var timer = null;
        var isFirst = immediately;
        // high order function
        if (!descriptor || (arguments.length === 1 && typeof target === 'function')) {
            return createDebounce(target);
        }
        function createDebounce(fn) {
            return function debounce() {
                var _this = this;
                var rest = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    rest[_i] = arguments[_i];
                }
                clearTimeout(timer);
                if (immediately) {
                    fn.apply(this, rest);
                    immediately = false;
                    isFirst = true;
                }
                if (isFirst) {
                    timer = setTimeout(function () {
                        isFirst = false;
                        immediately = true;
                    }, delay);
                }
                else {
                    timer = setTimeout(function () {
                        immediately = false;
                        fn.apply(_this, rest);
                    }, delay);
                }
            };
        }
        // 修饰类内的箭头函数
        if (descriptor.initializer) {
            return {
                enumerable: false,
                configurable: true,
                get: function () {
                    return createDebounce(descriptor.initializer.call(this));
                }
            };
        }
        return descriptor;
    };
};
exports.debounceAt = debounceAt;
/**
 * 防抖
 * @param fn 需要调用的function
 * @param {number} delay 延迟的时间
 */
var debounce = function (fn, delay) {
    if (delay === void 0) { delay = 300; }
    var timer = null;
    return function () {
        var _this = this;
        var rest = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            rest[_i] = arguments[_i];
        }
        clearTimeout(timer);
        timer = setTimeout(function () {
            fn(_this, rest);
        }, delay);
    };
};
exports.debounce = debounce;
/**
 * 装饰器版节流
 * @param {number} delay 延迟时间
 * @param immediately 是否立即执行
 */
var throttleAt = function (delay, immediately) {
    if (delay === void 0) { delay = 300; }
    return function (target, name, descriptor) {
        // high order function
        if (!descriptor || (arguments.length === 1 && typeof target === 'function')) {
            return createThrottle(target);
        }
        var canRun = true;
        var isFirst = immediately;
        function createThrottle(fn) {
            return function throttle() {
                var _this = this;
                var rest = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    rest[_i] = arguments[_i];
                }
                if (!canRun)
                    return;
                if (immediately) {
                    fn.apply(this, rest);
                    immediately = false;
                    isFirst = true;
                }
                if (isFirst) {
                    setTimeout(function () {
                        isFirst = false;
                        immediately = true;
                    }, delay);
                }
                else {
                    canRun = false;
                    setTimeout(function () {
                        fn.apply(_this, rest);
                        canRun = true;
                    }, delay);
                }
            };
        }
        // 修饰类内的箭头函数
        if (descriptor.initializer) {
            return {
                enumerable: false,
                configurable: true,
                get: function () {
                    return createThrottle(descriptor.initializer.call(this));
                }
            };
        }
        return descriptor;
    };
};
exports.throttleAt = throttleAt;
/**
 * 节流
 * @param fn 需要调用的function
 * @param {number} delay 延迟的时间默认300
 */
var throttle = function (fn, delay) {
    if (delay === void 0) { delay = 300; }
    var canRun = true; // 通过闭包保存一个标记
    return function () {
        var _this = this;
        var rest = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            rest[_i] = arguments[_i];
        }
        if (!canRun)
            return; // 在函数开头判断标记是否为true，不为true则return
        canRun = false; // 立即设置为false
        setTimeout(function () {
            // 将外部传入的函数的执行放在setTimeout中
            fn.apply(_this, rest);
            // 最后在setTimeout执行完毕后再把标记设置为true(关键)表示可以执行下一次循环了。当定时器没有执行的时候标记永远是false，在开头被return掉
            canRun = true;
        }, delay);
    };
};
exports.throttle = throttle;
