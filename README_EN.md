[中文版](./README.md)

# MarswizTools
Personal JS tools npm package git repo for Marswiz.

# Main Functions
## Utilities
- M_GetType(var)： Return the accurate string of argument type（String、Number、Object、RegExp、Promise等）
- M_deepCopy(var): Deep copy of an obj。Support Map、Set、Obj、Array、Date、RegExp values，keep original Function values。

## debounce & throttle Function

- M_debounce(fn, delay)：
- M_throttle(fn, delay)：

## qucik-sort of Number Array
- M_quickSort(arr)

## Cookie functions

- M_getCookie(name): Get Cookie by property name；
- M_setCookie(name, value, options = {})： Set Cookie by property name、value and options；
- M_deleteCookie(name)： Delete Cookie by property name；
