[To English Version](./README_EN.md)

# MarswizTools
Marswiz 个人JS工具库。

# 主要功能
## 实用工具
- M_GetType(var)： 准确获取传入变量的类型，返回类型字符串。（String、Number、Object、RegExp、Promise等）
- M_deepCopy(var): 深拷贝函数。支持Map、Set、Obj、Array、Date、RegExp等多种类型属性值，Function不进行深拷贝。

## 防抖 & 节流 包装函数

- M_debounce(fn, delay)：防抖包装函数，传入原函数和延迟时长(ms)，返回包装后函数；
- M_throttle(fn, delay)：节流包装函数，传入原函数和延迟时长(ms)，返回包装后函数；

## 数字类型数组快速排序
- M_quickSort(arr)

## Cookie相关操作

- M_getCookie(name): 根据属性名获取Cookie；
- M_setCookie(name, value, options = {})： 根据属性名、值和Cookie选项配置对象设置Cookie；
- M_deleteCookie(name)： 删除对应属性名Cookie。
