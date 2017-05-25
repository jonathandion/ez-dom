'use strict';Object.defineProperty(exports,'__esModule',{value:!0});

var _curry=require('lodash/fp/curry'),_curry2=_interopRequireDefault(_curry);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _toConsumableArray(a){if(Array.isArray(a)){for(var b=0,c=Array(a.length);b<a.length;b++)c[b]=a[b];return c}return Array.from(a)}

function addClass(a,b)


{
var c=a.split(' ');
return b.map(function(d){var e;

return(e=d.classList).add.apply(e,_toConsumableArray(c)),d;
});
}exports.default=
(0,_curry2.default)(addClass);