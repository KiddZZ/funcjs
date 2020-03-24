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
export const lineClamp = (
  ctx: CanvasRenderingContext2D,
  text = '',
  x: number,
  y: number,
  line: number,
  maxWidth: number,
  lineHeight: number
) => {
  // 首先将text转换为数组
  if (typeof text != 'string' || typeof x != 'number' || typeof y != 'number') {
    return
  }
  const arrText = text.split('')
  let lineArr: any[] = []
  let lineIndex = 0
  let isMore = false
  arrText.forEach(txt => {
    let lineText = (lineArr[lineIndex] || '') + txt
    const preWidth = ctx.measureText(lineText).width
    if (preWidth <= maxWidth) {
      lineArr[lineIndex] = (lineArr[lineIndex] || '') + txt
    } else {
      if (lineIndex + 1 < line) {
        lineIndex++
        lineArr[lineIndex] = '' + txt
      } else if (!isMore) {
        lineArr[lineIndex] = lineArr[lineIndex].substr(0, lineArr[lineIndex].length - 1) + '...'
        isMore = true
      }
    }
  })
  lineArr.forEach((line, index) => {
    ctx.fillText(line, x, y + lineHeight * index)
  })
}
