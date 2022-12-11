// ==UserScript==
// @name         定时刷新网页
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  很简单的一个自动刷新网页功能
// @author       写代码的猫叔
// @match        https://maoshu.fun/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    // 注意改掉上面的@match，里面是放指定你要刷新的网页网址
    // 几秒，例如10就是10秒刷新一次
    let timeout = 10
    console.log('%s秒后刷新: ', timeout);
    setTimeout(() => {
        location.reload()
    }, timeout * 1000);
})();



// ==UserScript==
// @name         指定时间关闭网页
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  很简单的一个自动关闭网页功能
// @author       写代码的猫叔
// @match        https://maoshu.fun/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    // 注意改掉上面的@match，里面是放指定你要关闭的网页网址
    // 几秒，例如10就是10秒关闭
    let timeout = 10
    console.log('%s秒后关闭: ', timeout);
    setTimeout(() => {
        window.close()
    }, timeout * 1000);
})();




// ==UserScript==
// @name         定时关闭网页
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://maoshu.fun/
// @icon         https://www.google.com/s2/favicons?domain=maoshu.fun
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    let time = '22:54:00'
    function p(num) {
        return num < 10 ? '0' + num : num
    }
    let tm = setInterval(() => {
        console.log('当前：%d:%d:%d', new Date().getHours(), new Date().getMinutes(), new Date().getSeconds());
        let nowtime = p(new Date().getHours()) + ':' + p(new Date().getMinutes()) + ':' + p(new Date().getSeconds())
        if (nowtime == time) {
            console.log('关闭网页');
            window.close()
        }
    }, 1000);
})();




