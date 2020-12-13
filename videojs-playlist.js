/*! @name videojs-playlist @version 4.3.1 @license Apache-2.0 */
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r(require("video.js")):"function"==typeof define&&define.amd?define(["video.js"],r):(e=e||self).videojsPlaylist=r(e.videojs)}(this,function(t){"use strict";t=t&&t.hasOwnProperty("default")?t.default:t;var i=function(e){var r=e.playlist.autoadvance_;r.timeout&&e.clearTimeout(r.timeout),r.trigger&&e.off("ended",r.trigger),r.timeout=null,r.trigger=null},c=function r(t,n){i(t),function(e){return"number"==typeof e&&!isNaN(e)&&0<=e&&e<1/0}(n)?(t.playlist.autoadvance_.delay=n,t.playlist.autoadvance_.trigger=function(){var e=function(){return r(t,n)};t.one("play",e),t.playlist.autoadvance_.timeout=t.setTimeout(function(){i(t),t.off("play",e),t.playlist.next()},1e3*n)},t.one("ended",t.playlist.autoadvance_.trigger)):t.playlist.autoadvance_.delay=null},f=function(e){return!!e&&"object"==typeof e},u=function(e,r){var t=e,n=r;return"object"==typeof e&&(t=e.src),"object"==typeof r&&(n=r.src),/^\/\//.test(t)&&(n=n.slice(n.indexOf("//"))),/^\/\//.test(n)&&(t=t.slice(t.indexOf("//"))),t===n},s=function(e,r){for(var t=0;t<e.length;t++){var n=e[t].sources;if(Array.isArray(n))for(var i=0;i<n.length;i++){var a=n[i];if(a&&u(a,r))return t}}return-1};function n(a,e,r){void 0===r&&(r=0);var u=null,l=!1,o=a.playlist=function(e,r){if(void 0===r&&(r=0),l)throw new Error("do not call playlist() during a playlist change");if(Array.isArray(e)){var t=Array.isArray(u)?u.slice():null,n=e.slice();(u=n.slice()).filter(function(e){return f(e)}).length!==u.length&&(u=function(e){var r,t=[];return e.forEach(function(e){f(e)?r=e:(r=Object(e)).originalValue=e,t.push(r)}),t}(u)),function(e){var r=1;e.forEach(function(e){e.playlistItemId_=r++})}(u),l=!0,a.trigger({type:"duringplaylistchange",nextIndex:r,nextPlaylist:n,previousIndex:o.currentIndex_,previousPlaylist:t||[]}),l=!1,-1!==r&&o.currentItem(r),t&&a.setTimeout(function(){a.trigger("playlistchange")},0)}return u.map(function(e){return e.originalValue||e}).slice()};return a.on("loadstart",function(){-1===o.currentItem()&&i(a)}),o.currentIndex_=-1,o.player_=a,o.autoadvance_={},o.repeat_=!1,o.currentPlaylistItemId_=null,o.currentItem=function(e){if(l)return o.currentIndex_;if("number"==typeof e&&o.currentIndex_!==e&&0<=e&&e<u.length)return o.currentIndex_=e,function(r,t){var n=!r.paused()||r.ended();r.trigger("beforeplaylistitem",t.originalValue||t),t.playlistItemId_&&(r.playlist.currentPlaylistItemId_=t.playlistItemId_),r.poster(t.poster||""),r.src(t.sources),function(e){for(var r=e.remoteTextTracks(),t=r&&r.length||0;t--;)e.removeRemoteTextTrack(r[t])}(r),r.ready(function(){if((t.textTracks||[]).forEach(r.addRemoteTextTrack.bind(r)),r.trigger("playlistitem",t.originalValue||t),n){var e=r.play();void 0!==e&&"function"==typeof e.then&&e.then(null,function(e){})}c(r,r.playlist.autoadvance_.delay)})}(o.player_,u[o.currentIndex_]),o.currentIndex_;var r=o.player_.currentSrc()||"";if(o.currentPlaylistItemId_){var t=function(e,r){for(var t=0;t<e.length;t++)if(e[t].playlistItemId_===r)return t;return-1}(u,o.currentPlaylistItemId_),n=u[t];if(n&&Array.isArray(n.sources)&&-1<s([n],r))return o.currentIndex_=t,o.currentIndex_;o.currentPlaylistItemId_=null}return o.currentIndex_=o.indexOf(r),o.currentIndex_},o.contains=function(e){return-1!==o.indexOf(e)},o.indexOf=function(e){if("string"==typeof e)return s(u,e);for(var r=Array.isArray(e)?e:e.sources,t=0;t<r.length;t++){var n=r[t];if("string"==typeof n)return s(u,n);if(n.src)return s(u,n.src)}return-1},o.currentIndex=function(){return o.currentItem()},o.lastIndex=function(){return u.length-1},o.nextIndex=function(){var e=o.currentItem();if(-1===e)return-1;var r=o.lastIndex();return o.repeat_&&e===r?0:Math.min(e+1,r)},o.previousIndex=function(){var e=o.currentItem();return-1===e?-1:o.repeat_&&0===e?o.lastIndex():Math.max(e-1,0)},o.first=function(){if(!l){var e=o.currentItem(0);if(u.length)return u[e].originalValue||u[e];o.currentIndex_=-1}},o.last=function(){if(!l){var e=o.currentItem(o.lastIndex());if(u.length)return u[e].originalValue||u[e];o.currentIndex_=-1}},o.next=function(){if(!l){var e=o.nextIndex();if(e!==o.currentIndex_){var r=o.currentItem(e);return u[r].originalValue||u[r]}}},o.previous=function(){if(!l){var e=o.previousIndex();if(e!==o.currentIndex_){var r=o.currentItem(e);return u[r].originalValue||u[r]}}},o.autoadvance=function(e){c(o.player_,e)},o.repeat=function(e){return void 0===e?o.repeat_:"boolean"==typeof e?(o.repeat_=!!e,o.repeat_):void t.log.error("videojs-playlist: Invalid value for repeat",e)},o.sort=function(e){u.length&&(u.sort(e),l||a.trigger("playlistsorted"))},o.reverse=function(){u.length&&(u.reverse(),l||a.trigger("playlistsorted"))},o.shuffle=function(e){var r=(void 0===e?{}:e).rest,t=0,n=u;if(r&&(t=o.currentIndex_+1,n=u.slice(t)),!(n.length<=1)){var i;if(function(e){for(var r=-1,t=e.length-1;++r<e.length;){var n=r+Math.floor(Math.random()*(t-r+1)),i=e[n];e[n]=e[r],e[r]=i}}(n),r)(i=u).splice.apply(i,[t,n.length].concat(n));l||a.trigger("playlistsorted")}},Array.isArray(e)?o(e.slice(),r):u=[],o}var e=function(e,r){n(this,e,r)};return(t.registerPlugin||t.plugin)("playlist",e),e.VERSION="4.3.1",e});
