// ==UserScript==
// @name         案例：添加按钮，拦截点击，并复制文本
// @description 测试样例
// @match        *://www.baidu.com/*
// @grant        GM_setClipboard
// ==/UserScript==

(function () {
    'use strict';
    document.querySelectorAll('.hotsearch-item .title-content-title').forEach(element => {

        let btn = document.createElement('button')
        btn.innerText = '复制'
        element.before(btn)

        btn.addEventListener('click', (e) => {
            e.preventDefault()
            GM_setClipboard(element.innerText)
        })

    });

})();
