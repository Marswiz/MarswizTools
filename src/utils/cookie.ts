// Origin: https://zh.javascript.info/cookie#fu-lu-cookie-han-shu
// 返回具有给定 name 的 cookie，
// 如果没找到，则返回 undefined

import { M_getType } from "./M_getType";

function M_getCookie(name: string) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

interface CookieOptions {
    expires ?: any
    'max-age'?: number
}

function M_setCookie(name: string, value: any, options: CookieOptions = {}) {
    const _options = {
        path: '/',
        // 如果需要，可以在这里添加其他默认值
        ...options
    };

    if (M_getType(options.expires) === 'Date') {
        _options.expires = _options.expires.toUTCString();
    }

    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

    for (let optionKey in _options) {
        updatedCookie += "; " + optionKey;
        let optionValue = options[optionKey];
        if (optionValue !== true) {
            updatedCookie += "=" + optionValue;
        }
    }

    document.cookie = updatedCookie;
}

function M_deleteCookie(name) {
    M_setCookie(name, "", {
        'max-age': -1
    })
}

export {
    M_getCookie,
    M_setCookie,
    M_deleteCookie,
}
