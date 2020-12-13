/*! @name videojs-logo @version 2.0.0 @license MIT */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("video.js")):"function"==typeof define&&define.amd?define(["video.js"],e):(t=t||self).videojsLogo=e(t.videojs)}(this,function(t){"use strict";var e=(t=t&&t.hasOwnProperty("default")?t.default:t).getPlugin("plugin"),i={image:void 0,url:void 0,position:"top-right",offsetH:0,offsetV:0,width:void 0,height:void 0,padding:5,fadeDelay:5e3,hideOnReady:!1},o=function(e){var o,s;function n(o,s){var n;return(n=e.call(this,o)||this).tid=null,n.div=null,n.options=t.mergeOptions(i,s),n.player.ready(function(){return n._onPlayerReady()}),n}s=e,(o=n).prototype=Object.create(s.prototype),o.prototype.constructor=o,o.__proto__=s;var d=n.prototype;return d._onPlayerReady=function(){this.player.addClass("vjs-logo"),this.options.image&&(this._setup(),this.options.hideOnReady||this.show())},d._setup=function(){var t=this,e=this.player.el(),i=document.createElement("div");i.classList.add("vjs-logo-content"),i.classList.add("vjs-logo-hide"),i.style.padding=this.options.padding+"px";var o=this.options,s=o.offsetH,n=o.offsetV;switch(this.options.position){case"top-left":i.style.top=n+"px",i.style.left=s+"px";break;case"top-right":i.style.top=n+"px",i.style.right=s+"px";break;case"bottom-left":i.style.bottom=n+"px",i.style.left=s+"px";break;case"bottom-right":i.style.bottom=n+"px",i.style.right=s+"px";break;default:i.style.top=n+"px",i.style.right=s+"px"}this.div=i;var d=document.createElement("img");d.src=this.options.image;var l=this.options,a=l.width,p=l.height;if(a&&(d.width=a),p&&(d.height=p),this.options.url){var r=document.createElement("a");r.href=this.options.url,r.onclick=function(e){e.preventDefault(),window.open(t.options.url)},r.appendChild(d),i.appendChild(r)}else i.appendChild(d);e.appendChild(i)},d.show=function(){var t=this;this.tid&&(clearTimeout(this.tid),this.tid=null),this.div&&this.div.classList.remove("vjs-logo-hide"),null!==this.options.fadeDelay&&(this.tid=setTimeout(function(){t.hide(),t.tid=null},this.options.fadeDelay))},d.hide=function(){this.div&&this.div.classList.add("vjs-logo-hide")},n}(e);return o.defaultState={},o.VERSION="2.0.0",t.registerPlugin("logo",o),o});
