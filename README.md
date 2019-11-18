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

输出的值是深拷贝之后的值，详情请看博客<a href='https://kiddzz.github.io/javascript/2019/09/11/%E5%AE%9E%E7%8E%B0%E4%B8%80%E4%B8%AA%E6%B7%B1%E6%8B%B7%E8%B4%9D%E5%87%BD%E6%95%B0/#'>实现一个深拷贝函数</a>

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

详情：<a href='https://kiddzz.github.io/javascript/2019/06/21/JS%E7%B2%BE%E5%BA%A6%E9%97%AE%E9%A2%98%E6%80%BB%E7%BB%93/#'>JS 精度问题总结</a>

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
  @throttleAt(500)
  click2() {
    //click2
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
