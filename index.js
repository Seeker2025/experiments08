(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();console.log("Hello World");const o=new Date;console.log("jast date",o);console.log("getDate()",o.getDate());console.log("getDay()",o.getDay());console.log("getMonth()",o.getMonth());console.log("getFullYear()",o.getFullYear());console.log("getHours()",o.getHours());console.log("getMinutes()",o.getMinutes());console.log("getSeconds()",o.getSeconds());console.log("getSeconds()",o.getMilliseconds());console.log("/////");console.log("getUTCDate()",o.getUTCDate());console.log("getUTCDay()",o.getUTCDay());console.log("getUTCMonth()",o.getUTCMonth());console.log("getUTCFullYear()",o.getUTCFullYear());console.log("getUTCHours()",o.getUTCHours());
//# sourceMappingURL=index.js.map
