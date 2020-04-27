"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLastTime = function (date) {
    var now = new Date().getTime();
    var diff_time = (date - now) / 1000;
    var h = Math.floor(diff_time / 3600);
    var m = Math.floor((diff_time / 60) % 60);
    var s = Math.floor(diff_time % 60);
    return {
        h: h,
        m: m,
        s: s
    };
};
