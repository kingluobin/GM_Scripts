// ==UserScript==
// @name         百度里面引入计算器
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.baidu.com/
// @icon         https://www.google.com/s2/favicons?domain=baidu.com
// @require   https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    $('body').append(`
    <iframe src="https://taobao.com" style="width:550px;height:600px; position:absolute;right:10px;top:100px;"></iframe>
    `)
})();
