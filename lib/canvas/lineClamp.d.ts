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
export declare const lineClamp: (ctx: CanvasRenderingContext2D, text: string, x: number, y: number, line: number, maxWidth: number, lineHeight: number) => void;
