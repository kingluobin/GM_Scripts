// ==UserScript==
// @name         知乎视频页面 优化
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.zhihu.com/people/*
// @icon         https://www.google.com/s2/favicons?domain=zhihu.com
// @grant        GM_addStyle
// ==/UserScript==

(function () {
    'use strict';

    GM_addStyle(`
        #Profile-zvideos .List-item{
            width:300px;
            display:inline-block;
        }
        #Profile-zvideos .ContentItem-meta,#Profile-zvideos .RichContent-inner{
            display:none;
        }
 
        #Profile-zvideos .ContentItem-actions{
            flex-wrap:wrap;
            width: 100%;
        }
 
        #Profile-zvideos .ContentItem-title{
            font-size:15px;
            margin-bottom: 10px;
        }
 
        #Profile-zvideos .RichContent-cover{
            width: 300px;    height: 184px;
        }
    `)
    // Your code here...
})();
