// ==UserScript==
// @name         前端加密和解密
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://maoshu.fun/
// @icon         https://www.google.com/s2/favicons?domain=csdn.net
// @require      https://cdn.bootcss.com/crypto-js/3.1.9-1/crypto-js.min.js
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    console.log('CryptoJS的方法：', CryptoJS);
    console.log("加密 MD5：" + CryptoJS.MD5("猫叔"));

    var pwd = "maoshu";
    console.log("加密 Hmac-MD5：" + CryptoJS.HmacMD5("猫叔", pwd));


    var salt = CryptoJS.enc.Utf8.parse("salt");  //盐
    var iter = 1000;  //迭代次数
    var res = CryptoJS.PBKDF2("猫叔", salt,
        {
            keySize: parseInt(4),
            iterations: parseInt(iter)
        }
    );

    console.log("加密 PBKDF2：" + res);

    //加密
    var passswd = "maoshufun";
    var jiami = CryptoJS.AES.encrypt("写代码的猫叔", passswd);
    console.log("加密 encrypt：" + jiami);
    //解密
    var result = CryptoJS.AES.decrypt(jiami, passswd).toString(CryptoJS.enc.Utf8);
    console.log("解密 decrypt：" + result);
})();
