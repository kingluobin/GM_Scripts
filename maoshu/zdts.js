
// ==UserScript==
// @name         maoshu.fun百度主动推送 一条条同步做法
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://maoshu.fun/*
// @icon         https://www.google.com/s2/favicons?domain=maoshu.fun
// @require      https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js
// @grant        GM_xmlhttpRequest
// ==/UserScript==

(function () {
    'use strict';

    let domain = 'https://www.maoshu.fun'
    async function tuisong() {


        for (const key in $('.post-wrapper')) {
            if (Object.hasOwnProperty.call($('.post-wrapper'), key)) {
                const element = $('.post-wrapper').eq(key);

                let url = element.find('.article-title a').attr('href')
                console.log(url, '---');
                if (url) {
                    url = domain + url
                    await wait(url)
                }
            }
        }
        console.log('全部执行完了');

    }

    function wait(url) {
        return new Promise(res => {
            // 推送到百度代码
            GM_xmlhttpRequest({
                method: 'POST',
                headers: {
                    "Content-Type": "text/plain"
                },
                data: url,
                url: "http://data.zz.baidu.com/urls?site=" + domain + "&token=ishyHABpmcEZMiA6",
                onload: (r) => {
                    console.log(JSON.parse(r.response));

                    res()

                }
            })
        })
    }


    tuisong()

    $('.prev-next').on('click', 'a.next', () => {
        console.log('点击了下一页');

        setTimeout(() => {
            tuisong()
        }, 1200);
    })
    // Your code here...
})();
