/**
 * 时间格式化  分->时+分
 * @param time 单位：分
 */
export declare function timeFormat(time: number, type: string): string | number | {
    h: number;
    min: number;
};
/**
 * 日期格式化
 * @param date 日期
 * @param format 格式
 */
export declare function dateFormat(date: any, fmt: string): string;
/**
 * 将分为单位的金钱格式化为：元+分
 * @param money 接受一个数字，单位分
 */
export declare function moneyFormat(money: number): {
    yuan?: undefined;
    fen?: undefined;
} | {
    yuan: number;
    fen: string | number;
};
/**
 * 获取倒计时
 * @param time 接受一个时间
 * @param type 默认时分秒  1-天时分秒
 */
export declare function getCountDown(time: any, type?: any): false | {
    h: number;
    m: number;
    s: number;
    d?: undefined;
} | {
    d: number;
    h: number;
    m: number;
    s: number;
};
