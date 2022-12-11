// ==UserScript==
// @name         西瓜首页按播放量排序
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.ixigua.com/
// @icon         https://www.google.com/s2/favicons?domain=ixigua.com
// @require   https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js
// @grant        GM_addStyle
// ==/UserScript==

(function () {
    'use strict';
    $('body').append(`
    <div style="position:fixed;top:100px;right:20px; z-index:99"><button id="paixu">排序</button></div>
    <div id="listbox" style="position:fixed;top:130px;right:20px; z-index:99; background:#fff; padding:10px;border:1px solid #ddd;">
      <span class="closebtn">&times;</span>
      <div class="body"></div>
    </div>
 
 
  `)
    GM_addStyle(`
  #paixu{
    padding:5px 10px;
    cursor:pointer;
    background:red;
    color:#fff;
    border:none
  }
  #listbox{
    display:none;
    border-radius:5px;
    width:300px;
    height:80%;
    overflow-y:scroll
  }
    #listbox .newlist{
      margin:10px 0
    }
    #listbox .title{
      color:red;
      font-size:15px
    }
    #listbox .username{
      color:#333;
      font-size:13px
    }
 
    .closebtn{
      position:fixed;
      color:red;
      font-size:28px;
      border:1px solid #ddd;
      border-radius:50%;
      width:36px;
      height:36px;
      line-height:33px;
      text-align:center;
      background:#fff;
      right:50px;
 
      cursor:pointer;
    }
    .closebtn:hover{
      color:#fff;
      background:red
    }
  `)

    $(document).on('click', '.closebtn', function () {
        $('#listbox').hide()
    })

    $(document).on('click', '#paixu', function () {
        let arr = []
        $('.FeedContainer__itemWrapper').each((index, ele) => {
            // console.log($(ele));
            let t = $(ele).find('.HorizontalFeedCard__title').text()
            let h = $(ele).find('.HorizontalFeedCard__title').attr('href')
            let u = $(ele).find('.user__name').text()
            let c = $(ele).find('.HorizontalFeedCard-accessories-bottomInfo__statistics').text()

            let c_arr = c.match(/\d+(\.\d+)?/g)
            // console.log(c_arr);
            let c_number = c_arr[0]
            if (c.includes('万次')) {
                c_number = c_number * 1000
            }
            arr.push({
                t, h, u, c, c_number
            })
            // console.log(t,h,u,c);
        })



        arr = arr.sort((a, b) => {
            return b.c_number - a.c_number
        })

        let lists = []
        arr.forEach((element, ind) => {
            lists.push(`
        <div class="newlist">
          <a href="${element.h}" target="_blank">
            <div class="title">${ind + 1}. ${element.t}</div>
            <div class="username">${element.u}</div>
            <div  class="counts">${element.c}</div>
          </a>
        </div>
      `)
        });

        $('#listbox .body').html(lists.join(''))

        $('#listbox').show()
    })

})();
