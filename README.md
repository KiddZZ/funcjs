# zb-fjs

工具函数项目

`npm install zb-fjs --save`

## deep-clone

深拷贝函数
使用方法：

```js
import { deepClone } from "zb-fjs";

deepClone(obj);
```

输出的值是深拷贝之后的值

## precision

解决计算机精度问题
使用方法：

```js
import { precision } from "zb-fjs";

/**
 * 小数点后面保留第 n 位
 *
 * @param x 做近似处理的数
 * @param n 小数点后第 n 位
 * @returns 近似处理后的数
 */
precision(num, n);
```

## debounce

防抖和节流，使用方法：

```js
import { debounceAt, debounce, throttleAt, throttle } from "zb-fjs";

class a {
  //参数number类型 延迟时间，默认300   throttleAt同
  @debounceAt(500)
  click() {
    //click

  }
}
```

## objClearUndefined

清除 object 中 不存在的项目

使用方法：

```js
import { objClearUndefined } from "zb-fjs";

objClearUndefined(obj);
```
