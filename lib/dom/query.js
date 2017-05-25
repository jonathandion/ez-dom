"use strict";Object.defineProperty(exports,"__esModule",{value:!0});function _toConsumableArray(a){if(Array.isArray(a)){for(var b=0,c=Array(a.length);b<a.length;b++)c[b]=a[b];return c}return Array.from(a)}

function query(a){
var b=[];









return!1==a instanceof Object&&!1==a instanceof Element?b.push.apply(b,_toConsumableArray(document.querySelectorAll(a))):b.push(a),Array.from(b);
}exports.default=

query;