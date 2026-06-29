// ==UserScript==
// @name         HBO Max — no control gradients
// @namespace    hbo-no-dim
// @version      1.2
// @description  Hides the dark top/bottom gradients and the loader scrim
// @match        https://*.max.com/*
// @match        https://*.hbomax.com/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function () {
    "use strict";
    const style = document.createElement("style");
    style.textContent = `
    [class*="BottomGradient"],
    [class*="TopGradient"],
    [class*="StyledProtection-Fuse-Web-Play"] {
      display: none !important;
    }
  `;
    document.documentElement.appendChild(style);
})();
