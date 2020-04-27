"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * canvas自动换行
 * @param ctx context
 * @param text 文字
 * @param x x
 * @param y y
 * @param line 行数
 * @param maxWidth 最大宽度
 * @param lineHeight 行高
 */
exports.lineClamp = function (ctx, text, x, y, line, maxWidth, lineHeight) {
    if (text === void 0) { text = ''; }
    // 首先将text转换为数组
    if (typeof text != 'string' || typeof x != 'number' || typeof y != 'number') {
        return;
    }
    var arrText = text.split('');
    var lineArr = [];
    var lineIndex = 0;
    var isMore = false;
    arrText.forEach(function (txt) {
        var lineText = (lineArr[lineIndex] || '') + txt;
        var preWidth = ctx.measureText(lineText).width;
        if (preWidth <= maxWidth) {
            lineArr[lineIndex] = (lineArr[lineIndex] || '') + txt;
        }
        else {
            if (lineIndex + 1 < line) {
                lineIndex++;
                lineArr[lineIndex] = '' + txt;
            }
            else if (!isMore) {
                lineArr[lineIndex] = lineArr[lineIndex].substr(0, lineArr[lineIndex].length - 1) + '...';
                isMore = true;
            }
        }
    });
    lineArr.forEach(function (line, index) {
        ctx.fillText(line, x, y + lineHeight * index);
    });
};
