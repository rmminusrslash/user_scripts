// ==UserScript==
// @name         Add Feedback Button
// @namespace    https://zalando.de/
// @version      0.1
// @description  give feedback to improve the zalando user experience
// @author       Lina Weichbrodt
// @include      /^https?://.*zalando\.*/?/
// @grant        GM_addStyle
// @grant  GM_getResourceText
// @resource pastebin https://pastebin.com/raw/VG3PDN9G
// @require http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// ==/UserScript==

(function() {
    $("body").append(GM_getResourceText("pastebin"));
})();
