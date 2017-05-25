'use strict';Object.defineProperty(exports,'__esModule',{value:!0});

var _curry=require('lodash/fp/curry'),_curry2=_interopRequireDefault(_curry);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}

function setText(a,b)


{
return b.map(function(c){

return c.textContent=a,c;
});
}exports.default=

(0,_curry2.default)(setText);