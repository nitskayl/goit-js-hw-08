!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,u=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof e&&e&&e.Object===Object&&e,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),v=Object.prototype.toString,m=Math.max,g=Math.min,b=function(){return d.Date.now()};function p(e,t,n){var r,o,a,f,u,l,c=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(i);function p(t){var n=r,i=o;return r=o=void 0,c=t,f=e.apply(i,n)}function O(e){return c=e,u=setTimeout(h,t),s?p(e):f}function S(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=a}function h(){var e=b();if(S(e))return w(e);u=setTimeout(h,function(e){var n=t-(e-l);return d?g(n,a-(e-c)):n}(e))}function w(e){return u=void 0,v&&r?p(e):(r=o=void 0,f)}function T(){var e=b(),n=S(e);if(r=arguments,o=this,l=e,n){if(void 0===u)return O(l);if(d)return u=setTimeout(h,t),p(l)}return void 0===u&&(u=setTimeout(h,t)),f}return t=j(t)||0,y(n)&&(s=!!n.leading,a=(d="maxWait"in n)?m(j(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==u&&clearTimeout(u),c=0,r=l=o=u=void 0},T.flush=function(){return void 0===u?f:w(b())},T}function y(e){var n=void 0===e?"undefined":t(r)(e);return!!e&&("object"==n||"function"==n)}function j(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(r)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==v.call(e)}(e))return NaN;if(y(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=y(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var i=f.test(e);return i||u.test(e)?l(e.slice(2),i?2:8):a.test(e)?NaN:+e}n=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(i);return y(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),p(e,t,{leading:r,maxWait:t,trailing:o})};var O=document.querySelector(".feedback-form");O.addEventListener("input",n((function(e){if(e.target.value){h[e.target.name]=e.target.value;var t=JSON.stringify(h);localStorage.setItem("feedback-form-state",t)}}),500)),O.addEventListener("submit",(function(e){if(e.preventDefault(),h.email&&h.message)return e.target.reset(),localStorage.removeItem("feedback-form-state"),console.log(h),void(h={});return void alert("Усі поля мають бути заповнені")}));var S=localStorage.getItem("feedback-form-state");!function(){if(S=localStorage.getItem("feedback-form-state")){var e=JSON.parse(S);!function(e){e.email&&(O.email.value=e.email)}(e),function(e){e.message&&(O.message.value=e.message)}(e)}}();var h={};S&&(h=JSON.parse(S))}();
//# sourceMappingURL=03-feedback.b2e68460.js.map
