(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"1DEj":function(t,e,n){},QfWi:function(t,e,n){"use strict";n.r(e);n("1DEj");const o={days:document.querySelector('span[data-value="days"]'),hours:document.querySelector('span[data-value="hours"]'),mins:document.querySelector('span[data-value="mins"]'),secs:document.querySelector('span[data-value="secs"]')};function a(t){return String(t).padStart(2,"0")}(()=>{const t=new Date("Dec 21, 2020");setInterval(()=>{const e=Date.now();!function(t){const e=a(Math.floor(t/864e5)),n=a(Math.floor(t%864e5/36e5)),s=a(Math.floor(t%36e5/6e4)),c=a(Math.floor(t%6e4/1e3));o.days.textContent=e,o.hours.textContent=n,o.mins.textContent=s,o.secs.textContent=c}(t-e)},1e3)})()}},[["QfWi",1]]]);
//# sourceMappingURL=main.1cba132840b7d29fd17d.js.map