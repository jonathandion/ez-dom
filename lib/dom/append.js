'use strict';Object.defineProperty(exports,'__esModule',{value:!0});

var _curry=require('lodash/fp/curry'),_curry2=_interopRequireDefault(_curry);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}

function append(a,b){
var c=a;
return b.map(function(d){




return!0==a instanceof Element&&(c=a.outerHTML),d.innerHTML+=c,d;
});
}exports.default=

(0,_curry2.default)(append);