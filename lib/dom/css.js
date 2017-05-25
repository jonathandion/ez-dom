'use strict';Object.defineProperty(exports,'__esModule',{value:!0});

var _curry=require('lodash/fp/curry'),_curry2=_interopRequireDefault(_curry);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}

function css(a,b){
return b.map(function(c){

return Object.assign(c.style,a),c;
});
}exports.default=

(0,_curry2.default)(css);