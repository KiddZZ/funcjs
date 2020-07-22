# zb-fjs

工具函数项目

`npm install zb-fjs --save`

## deep-clone

深拷贝函数
使用方法：

```js
import { deepClone } from 'zb-fjs'

deepClone(obj)
```

输出的值是深拷贝之后的值，详情请看博客<a href='https://kiddzz.github.io/javascript/2019/09/11/%E5%AE%9E%E7%8E%B0%E4%B8%80%E4%B8%AA%E6%B7%B1%E6%8B%B7%E8%B4%9D%E5%87%BD%E6%95%B0/#'>实现一个深拷贝函数</a>

## precision

解决计算机精度问题
使用方法：

```js
import { precision } from 'zb-fjs'

/**
 * 小数点后面保留第 n 位
 *
 * @param x 做近似处理的数
 * @param n 小数点后第 n 位
 * @returns 近似处理后的数
 */
precision(num, n)
```

详情：<a href='https://kiddzz.github.io/javascript/2019/06/21/JS%E7%B2%BE%E5%BA%A6%E9%97%AE%E9%A2%98%E6%80%BB%E7%BB%93/#'>JS 精度问题总结</a>

## debounce

防抖和节流，使用方法：

```js
import { debounceAt, debounce, throttleAt, throttle } from 'zb-fjs'

class a {
  //参数number类型 延迟时间，默认300,第二参数boolean类型，第一次点击是否立即执行   throttleAt同
  @debounceAt(500, true)
  click() {
    //click
  }
  @throttleAt(500)
  click2() {
    //click2
  }
}
```

## objClearUndefined

清除 object 中 不存在的属性

使用方法：

```js
import { objClearUndefined } from 'zb-fjs'

const obj = {
  a: 123,
  b: '',
  c: undefined
}

objClearUndefined(obj) // => { a: 123 }
```

## timeFormat

时间格式化 分->时+分

```js
import { timeFormat } from 'zb-fjs'

timeFormat(70) // => 1小时10分钟
timeFormat(70, 'obj') // => { h:1,min:10 }
```

## dateFormat

时间格式化 年-Y 月-M 日-D 小时-H 分-m 秒-s 毫秒-S

```js
import { dateFormat } from 'zb-fjs'

dateFormat('1993-11-11T12:00:00', 'YYYY.MM.DD HH:mm:ss') // => 1993.11.11 12:00:00
dateFormat('1993-11-11T12:00:00', 'YYYY-MM-DD HH:mm:ss') // => 1993-11-11 12:00:00
```

## moneyFormat

金钱格式化（分）

```js
import { moneyFormat } from 'zb-fjs'

moneyFormat(230) // => { yuan:2, fen:30 }
```

## lineClamp

canvas 中文字的换行和限定行数

接受 context 参数， text：渲染文字，x,y 坐标，line 行数，maxWidth：最大宽度，lineHeight: （文字高度+行间距）

```js
import { lineClamp } from 'zb-fjs'

lineClamp(ctx, text, x, y, line, maxWidth, lineHeight)
```

## sumArr

数组求和  
将数组中的所有数字或者数字字符串相加，返回 number 类型

```js
import { sumArr, sumObjArr } from 'zb-fjs'

sumArr([1, 3, 4, 5, 6]) // 19
sumObjArr([{ a: 1 }, { a: 2 }, { a: 3 }], 'a') // 6
```

## objEquar

对象是否相等

```js
import { objEquar } from 'zb-fjs'

objEquar({a: '123',b: {c:'aaa',d: [1,2]},{a:'123',b: {c:'aaa',d: [1,2]}}})
```

## arrEquar

数组是否相等

```js
import { arrEquar } from 'zb-fjs'

arrEquar([1, 2], [1, 2])
arrEquar([1, 1], [1, 2])
arrEquar([1, 2, { a: '12' }], [1, 2, { a: '12' }])
```

## objArrRepeat

对象数组根据 key 去重

```js
import { objArrRepeat } from 'zb-fjs'

objArrRepeat([{ name: '1' }, { name: '2' }, { name: '1' }], 'name')
```

## getQuery

获取 url 上的 query 参数

```js
import { getQuery } from 'zb-fjs'

getQuery('name')
```

## flat

数组扁平化, 接受参数 1 数组， 2：拍平层级，默认展开所有

```js
import { flat } from 'zb-fjs'

flat(arr, 1)
```

## getCountDown 倒计时
1.1.5
```js
import { getCountDown } from 'zb-fjs'

getCountDown('2020-6-12 11:00:00')
```
