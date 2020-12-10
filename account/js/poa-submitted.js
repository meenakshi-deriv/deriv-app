/*! For license information please see poa-submitted.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("@deriv/components"),require("@deriv/shared"),require("@deriv/translations"),require("react")):"function"==typeof define&&define.amd?define(["@deriv/components","@deriv/shared","@deriv/translations","react"],t):"object"==typeof exports?exports["@deriv/account"]=t(require("@deriv/components"),require("@deriv/shared"),require("@deriv/translations"),require("react")):e["@deriv/account"]=t(e["@deriv/components"],e["@deriv/shared"],e["@deriv/translations"],e.react)}(window,(function(e,t,n,r){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s="./Components/poa-submitted/index.js")}({"../../../node_modules/classnames/index.js":function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)&&r.length){var i=o.apply(null,r);i&&e.push(i)}else if("object"===a)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},"./Components/icon-message-content/index.js":function(e,t,n){"use strict";n.r(t);var r=n("react"),o=n.n(r),a=n("../../../node_modules/classnames/index.js"),i=n.n(a),c=n("@deriv/components"),s=n("@deriv/shared");function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=function(e){var t=e.className,n=e.children,r=e.icon,a=e.icon_row,l=e.message,d=e.text;return o.a.createElement(c.Div100vhContainer,{className:"account-management__message-wrapper",is_disabled:Object(s.isDesktop)(),height_offset:"110px"},o.a.createElement("div",{className:i()("account-management__message-content",u({},"".concat(t,"__message-content"),t))},r&&o.a.createElement("div",{className:i()("account-management__message-icon",u({},"".concat(t,"__message-icon"),t))},r),a&&o.a.createElement("div",null,a),o.a.createElement("div",{className:i()("account-management__message",u({},"".concat(t,"__message"),t))},l),d&&o.a.createElement("div",{className:"account-management__text-container"},o.a.createElement(c.Text,{className:i()(u({},"".concat(t,"__text"),t)),as:"p",size:"xs",align:"center"},d)),n))};t.default=l},"./Components/poa-continue-trading-button/continue-trading-button.jsx":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("@deriv/components"),o=n("@deriv/translations"),a=n("react"),i=n.n(a),c=function(){return i.a.createElement(r.ButtonLink,{to:"/"},i.a.createElement(r.Text,{className:"dc-btn__text",as:"p",weight:"bold"},Object(o.localize)("Continue trading")))}},"./Components/poa-submitted/index.js":function(e,t,n){"use strict";n.r(t);var r=n("@deriv/components"),o=n("@deriv/translations"),a=n("react"),i=n.n(a),c=n("./Components/poa-continue-trading-button/continue-trading-button.jsx"),s=n("./Components/poi-button/poi-button.jsx").a,u=n("./Components/icon-message-content/index.js");t.default=function(e){var t=e.needs_poi,n=e.is_description_disabled,a=void 0!==n&&n,l=Object(o.localize)("Your proof of address was submitted successfully");return t?i.a.createElement(u.default,{message:l,icon:i.a.createElement(r.Icon,{icon:"IcPoaVerified",size:128})},i.a.createElement("div",{className:"account-management__text-container"},i.a.createElement(r.Text,{align:"center",size:"xs",as:"p"},Object(o.localize)("Your document is being reviewed, please check back in 1-3 days.")),i.a.createElement(r.Text,{align:"center",size:"xs",as:"p"},Object(o.localize)("You must also submit a proof of identity."))),i.a.createElement(s,null)):i.a.createElement(u.default,{message:l,text:Object(o.localize)("Your document is being reviewed, please check back in 1-3 days."),icon:i.a.createElement(r.Icon,{icon:"IcPoaVerified",size:128})},!a&&i.a.createElement(c.a,null))}},"./Components/poi-button/poi-button.jsx":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("@deriv/components"),o=n("@deriv/translations"),a=n("react"),i=n.n(a),c=function(){return i.a.createElement(r.ButtonLink,{to:"/account/proof-of-identity"},i.a.createElement(r.Text,{className:"dc-btn__text",weight:"bold",as:"p"},Object(o.localize)("Submit proof of identity")))}},"@deriv/components":function(t,n){t.exports=e},"@deriv/shared":function(e,n){e.exports=t},"@deriv/translations":function(e,t){e.exports=n},react:function(e,t){e.exports=r}}).default}));
//# sourceMappingURL=poa-submitted.js.map