!function(t){var e={};t.document;t.addEventListener("load",function(){"function"==typeof FastClick&&FastClick.attach(document.body)},!1),"function"==typeof define?define(e):t.YDUI=e}(window),!function(t,e){var n=e.dialog=e.dialog||{},i=t.document,o=i.querySelectorAll("body")[0];n.confirm=function(t,n,a){var r=e,c=arguments.length;if(2>c)return void console.error("From YDUI's confirm: Please set two or three parameters!!!");if("function"!=typeof arguments[1]&&2==c&&!arguments[1]instanceof Array)return void console.error("From YDUI's confirm: The second parameter must be a function or array!!!");2==c&&(a=n,n=t,t="提示");var l=a;"function"==typeof a&&(l=[{txt:"取消",color:!1},{txt:"确定",color:!0,callback:function(){a&&a()}}]);var s=i.createElement("div"),u="YDUI_CONFRIM";s.id=u,s.innerHTML='<div class="mask-black"></div><div class="m-confirm">    <div class="confirm-hd"><strong class="confirm-title">'+t+'</strong></div>    <div class="confirm-bd">'+n+"</div></div>";var d=i.querySelector("#"+u);d&&s.parentNode.removeChild(s);var m=i.createElement("div");m.className="confirm-ft",l.forEach(function(t,e){var n=i.createElement("a");n.href="javascript:;","boolean"==typeof t.color?n.className="confirm-btn "+(t.color?"primary":"default"):"string"==typeof t.color&&n.setAttribute("style","color: "+t.color),n.innerHTML=t.txt||"",function(t){n.onclick=function(){l[t].stay||(r.pageScroll.unlock(),s.parentNode.removeChild(s)),l[t].callback&&l[t].callback()}}(e),m.appendChild(n)}),s.querySelector(".m-confirm").appendChild(m),r.pageScroll.lock(),o.appendChild(s)},n.alert=function(t,n){var a=i.createElement("div"),r="YDUI_ALERT";a.innerHTML='<div>    <div class="mask-black"></div>    <div class="m-confirm m-alert">        <div class="confirm-bd">'+(t||"YDUI Touch")+'</div>        <div class="confirm-ft">            <a href="javascript:;" class="confirm-btn primary">确定</a>        </div>    </div></div>';var c=i.querySelector("#"+r);c&&a.parentNode.removeChild(a),e.pageScroll.lock(),o.appendChild(a),a.querySelectorAll("a")[0].onclick=function(){a.parentNode.removeChild(a),e.pageScroll.unlock(),"function"==typeof n&&n()}},n.toast=function(t,n,a,r){var c=arguments.length;if(2>c)return void console.error("From YDUI's tipMes: Please set two or more parameters!!!");var l="error"==n?"tipmes-error-ico":"tipmes-success-ico",s=i.createElement("div"),u="YDUI_TIPMES";s.id=u,s.innerHTML='<div>    <div class="mask-white"></div>    <div class="m-tipmes">        <div class="'+l+'"></div>        <p class="tipmes-content">'+(t||"")+"</p>    </div></div>";var d=i.querySelector("#"+u);d&&s.parentNode.removeChild(s),e.pageScroll.lock(),o.appendChild(s),"function"==typeof a&&arguments.length>=3&&(r=a,a=2e3);var m=setTimeout(function(){clearTimeout(m),e.pageScroll.unlock(),s.parentNode.removeChild(s),"function"==typeof r&&r()},(~~a||2e3)+100)},n.loading=function(){return{show:function(t){var n=i.createElement("div"),a="YDUI_LOADING";n.id=a,n.innerHTML='    <div class="mask-white"></div>    <div class="m-loading">        <div class="ld-loading">            <div class="m-loading-leaf m-loading-leaf-0"></div>            <div class="m-loading-leaf m-loading-leaf-1"></div>            <div class="m-loading-leaf m-loading-leaf-2"></div>            <div class="m-loading-leaf m-loading-leaf-3"></div>            <div class="m-loading-leaf m-loading-leaf-4"></div>            <div class="m-loading-leaf m-loading-leaf-5"></div>            <div class="m-loading-leaf m-loading-leaf-6"></div>            <div class="m-loading-leaf m-loading-leaf-7"></div>            <div class="m-loading-leaf m-loading-leaf-8"></div>            <div class="m-loading-leaf m-loading-leaf-9"></div>            <div class="m-loading-leaf m-loading-leaf-10"></div>            <div class="m-loading-leaf m-loading-leaf-11"></div>        </div>        <p class="ld-toast-content">'+(t||"数据加载中")+"</p>    </div>";var r=i.querySelector("#"+a);r&&n.parentNode.removeChild(n),e.pageScroll.lock(),o.appendChild(n)},hide:function(){e.pageScroll.unlock();var t=i.querySelector("#YDUI_LOADING");t.parentNode.removeChild(t)}}}()}(window,YDUI),!function(){"use strict";function t(t,e){function n(t,e){return function(){return t.apply(e,arguments)}}var i;e=e||{},this.trackingClick=!1,this.trackingClickStart=0,this.targetElement=null,this.touchStartX=0,this.touchStartY=0,this.touchBoundary=e.touchBoundary||10,this.layer=t,this.tapDelay=e.tapDelay||200,this.tapTimeout=e.tapTimeout||700;for(var o=["onMouse","onClick","onTouchStart","onTouchMove","onTouchEnd","onTouchCancel"],a=this,r=0,c=o.length;c>r;r++)a[o[r]]=n(a[o[r]],a);t.addEventListener("click",this.onClick,!0),t.addEventListener("touchstart",this.onTouchStart,!1),t.addEventListener("touchmove",this.onTouchMove,!1),t.addEventListener("touchend",this.onTouchEnd,!1),t.addEventListener("touchcancel",this.onTouchCancel,!1),Event.prototype.stopImmediatePropagation||(t.removeEventListener=function(e,n,i){var o=Node.prototype.removeEventListener;"click"===e?o.call(t,e,n.hijacked||n,i):o.call(t,e,n,i)},t.addEventListener=function(e,n,i){var o=Node.prototype.addEventListener;"click"===e?o.call(t,e,n.hijacked||(n.hijacked=function(t){t.propagationStopped||n(t)}),i):o.call(t,e,n,i)}),"function"==typeof t.onclick&&(i=t.onclick,t.addEventListener("click",function(t){i(t)},!1),t.onclick=null)}var e=/iP(ad|hone|od)/.test(navigator.userAgent),n=/OS [6-7]_\d/.test(navigator.userAgent);t.prototype.needsClick=function(t){switch(t.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(t.disabled)return!0;break;case"input":if("file"===t.type||t.disabled)return!0;break;case"label":case"iframe":case"video":return!0}return/\bneedsclick\b/.test(t.className)},t.prototype.needsFocus=function(t){switch(t.nodeName.toLowerCase()){case"textarea":case"select":return!0;case"input":switch(t.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return!1}return!t.disabled&&!t.readOnly;default:return/\bneedsfocus\b/.test(t.className)}},t.prototype.sendClick=function(t,e){var n,i;document.activeElement&&document.activeElement!==t&&document.activeElement.blur(),i=e.changedTouches[0],n=document.createEvent("MouseEvents"),n.initMouseEvent("click",!0,!0,window,1,i.screenX,i.screenY,i.clientX,i.clientY,!1,!1,!1,!1,0,null),n.forwardedTouchEvent=!0,t.dispatchEvent(n)},t.prototype.focus=function(t){var e,n=["date","time","month","number","email"];t.setSelectionRange&&-1===n.indexOf(t.type)?(e=t.value.length,t.setSelectionRange(e,e)):t.focus()},t.prototype.updateScrollParent=function(t){var e,n;if(e=t.fastClickScrollParent,!e||!e.contains(t)){n=t;do{if(n.scrollHeight>n.offsetHeight){e=n,t.fastClickScrollParent=n;break}n=n.parentElement}while(n)}e&&(e.fastClickLastScrollTop=e.scrollTop)},t.prototype.getTargetElementFromEventTarget=function(t){return t.nodeType===Node.TEXT_NODE?t.parentNode:t},t.prototype.onTouchStart=function(t){var e,n,i;return t.targetTouches.length>1?!0:(e=this.getTargetElementFromEventTarget(t.target),n=t.targetTouches[0],i=window.getSelection(),i.rangeCount&&!i.isCollapsed?!0:(this.trackingClick=!0,this.trackingClickStart=t.timeStamp,this.targetElement=e,this.touchStartX=n.pageX,this.touchStartY=n.pageY,t.timeStamp-this.lastClickTime<this.tapDelay&&t.preventDefault(),!0))},t.prototype.touchHasMoved=function(t){var e=t.changedTouches[0],n=this.touchBoundary;return Math.abs(e.pageX-this.touchStartX)>n||Math.abs(e.pageY-this.touchStartY)>n},t.prototype.onTouchMove=function(t){return this.trackingClick?((this.targetElement!==this.getTargetElementFromEventTarget(t.target)||this.touchHasMoved(t))&&(this.trackingClick=!1,this.targetElement=null),!0):!0},t.prototype.findControl=function(t){return void 0!==t.control?t.control:t.htmlFor?document.getElementById(t.htmlFor):t.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")},t.prototype.onTouchEnd=function(t){var e,i,o,a,r,c=this.targetElement;if(!this.trackingClick)return!0;if(t.timeStamp-this.lastClickTime<this.tapDelay)return this.cancelNextClick=!0,!0;if(t.timeStamp-this.trackingClickStart>this.tapTimeout)return!0;if(this.cancelNextClick=!1,this.lastClickTime=t.timeStamp,i=this.trackingClickStart,this.trackingClick=!1,this.trackingClickStart=0,n&&(r=t.changedTouches[0],c=document.elementFromPoint(r.pageX-window.pageXOffset,r.pageY-window.pageYOffset)||c,c.fastClickScrollParent=this.targetElement.fastClickScrollParent),o=c.tagName.toLowerCase(),"label"===o)e=this.findControl(c),e&&(this.focus(c),c=e);else if(this.needsFocus(c))return t.timeStamp-i>100||window.top!==window&&"input"===o?(this.targetElement=null,!1):(this.focus(c),this.sendClick(c,t),"select"!==o&&(this.targetElement=null,t.preventDefault()),!1);return a=c.fastClickScrollParent,a&&a.fastClickLastScrollTop!==a.scrollTop?!0:(this.needsClick(c)||(t.preventDefault(),this.sendClick(c,t)),!1)},t.prototype.onTouchCancel=function(){this.trackingClick=!1,this.targetElement=null},t.prototype.onMouse=function(t){return this.targetElement?t.forwardedTouchEvent?!0:t.cancelable&&(!this.needsClick(this.targetElement)||this.cancelNextClick)?(t.stopImmediatePropagation?t.stopImmediatePropagation():t.propagationStopped=!0,t.stopPropagation(),!1):!0:!0},t.prototype.onClick=function(t){var e;return this.trackingClick?(this.targetElement=null,this.trackingClick=!1,!0):"submit"===t.target.type&&0===t.detail?!0:(e=this.onMouse(t),e||(this.targetElement=null),e)},t.prototype.destroy=function(){var t=this.layer;t.removeEventListener("click",this.onClick,!0),t.removeEventListener("touchstart",this.onTouchStart,!1),t.removeEventListener("touchmove",this.onTouchMove,!1),t.removeEventListener("touchend",this.onTouchEnd,!1),t.removeEventListener("touchcancel",this.onTouchCancel,!1)},t.attach=function(n,i){return e?new t(n,i):void 0},window.FastClick=t}(),!function(t,e){var n=t.document;e.pageScroll=function(){var t=function(t){t.preventDefault(),t.stopPropagation()},e=!1;return{lock:function(){e||(e=!0,n.addEventListener("touchmove",t))},unlock:function(){e=!1,n.removeEventListener("touchmove",t)}}}()}(window,YDUI),!function(win,$){function storage(t){var e=util;return{set:function(n,i){t.setItem(n,e.serialize(i))},get:function(n){return e.deserialize(t.getItem(n))},remove:function(e){t.removeItem(e)},clear:function(){t.clear()}}}var util=$.util=$.util||{},doc=win.document;util.timestampTotime=function(t,e){var n={},i=function(t){return 10>t?"0"+t:t};n.f=e%1e3,e=Math.floor(e/1e3),n.s=e%60,e=Math.floor(e/60),n.m=e%60,e=Math.floor(e/60),n.h=e%24,n.d=Math.floor(e/24);var o=function(t){return"$1"+i(t)+"$2"};return t=t.replace(/\{([^{]*?)%d(.*?)\}/g,o(n.d)),t=t.replace(/\{([^{]*?)%h(.*?)\}/g,o(n.h)),t=t.replace(/\{([^{]*?)%m(.*?)\}/g,o(n.m)),t=t.replace(/\{([^{]*?)%s(.*?)\}/g,o(n.s)),t=t.replace(/\{([^{]*?)%f(.*?)\}/g,o(n.f))},util.countdown=function(t,e,n,i){var o=this,a=(new Date).getTime(),r=setInterval(function(){var n=e-(new Date).getTime()+a;n>0?i(o.timestampTotime(t,n)):(clearInterval(r),"function"==typeof i&&i(""))},n)},util.calc=function(arg1,arg2,op){var ra=1,rb=1,m;try{ra=arg1.toString().split(".")[1].length}catch(e){}try{rb=arg2.toString().split(".")[1].length}catch(e){}switch(m=Math.pow(10,Math.max(ra,rb)),op){case"+":case"-":arg1=Math.round(arg1*m),arg2=Math.round(arg2*m);break;case"*":ra=Math.pow(10,ra),rb=Math.pow(10,rb),m=ra*rb,arg1=Math.round(arg1*ra),arg2=Math.round(arg2*rb);break;case"/":arg1=Math.round(arg1*m),arg2=Math.round(arg2*m),m=1}try{var result=eval("(("+arg1+")"+op+"("+arg2+"))/"+m)}catch(e){}return result},util.getImgBase64=function(t,e){var n=this,i="",o=t.files[0];if(o){if(!/image\/\w+/.test(o.type))return void n.tipMes("请上传图片文件","error");var a=new FileReader;a.readAsDataURL(o),a.onload=function(){i=this.result,"function"==typeof e&&e(i)}}},util.getQueryString=function(t){var e=new RegExp("(^|&)"+t+"=([^&]*)(&|$)"),n=win.location.search.substr(1).match(e),i="";return null!=n&&(i=decodeURIComponent(n[2])),i},util.serialize=function(t){return"string"==typeof t?t:JSON.stringify(t)},util.deserialize=function(t){if("string"==typeof t)try{return JSON.parse(t)}catch(e){return t||void 0}},util.localStorage=function(){return storage(win.localStorage)}(),util.sessionStorage=function(){return storage(win.sessionStorage)}(),util.cookie=function(){return{get:function(t){var e=doc.cookie.match("(?:^|;)\\s*"+t+"=([^;]*)");return e&&e[1]?decodeURIComponent(e[1]):""},set:function(t,e,n,i,o,a){var r=String(encodeURIComponent(e)),c=n;"number"==typeof c&&(c=new Date,c.setTime(c.getTime()+1e3*n)),c instanceof Date&&(r+="; expires="+c.toUTCString()),!!i&&(r+="; domain="+i),r+="; path="+(o||"/"),a&&(r+="; secure"),doc.cookie=t+"="+r}}}(),util.getUA=function(){return win.navigator&&win.navigator.userAgent||""},util.isMobile=function(){return!!getUA.match(/AppleWebKit.*Mobile.*/)||"ontouchstart"in doc.documentElement},util.isIOS=function(){return!!getUA.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)},util.isWeixin=function(){return getUA.indexOf("MicroMessenger")>-1};var getUA=util.getUA();$.isMobile=util.isMobile(),$.isWeixin=util.isWeixin(),$.isIOS=util.isIOS()}(window,YDUI);