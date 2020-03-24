"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lineClamp = (ctx, text = '', x, y, line, maxWidth, lineHeight) => {
    // 首先将text转换为数组
    if (typeof text != 'string' || typeof x != 'number' || typeof y != 'number') {
        return;
    }
    const arrText = text.split('');
    let lineArr = [];
    let lineIndex = 0;
    let isMore = false;
    arrText.forEach(txt => {
        let lineText = (lineArr[lineIndex] || '') + txt;
        const preWidth = ctx.measureText(lineText).width;
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
    lineArr.forEach((line, index) => {
        ctx.fillText(line, x, y + lineHeight * index);
    });
};
