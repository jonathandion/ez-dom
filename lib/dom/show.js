'use strict';Object.defineProperty(exports,'__esModule',{value:!0});

var _curry=require('lodash/fp/curry'),_curry2=_interopRequireDefault(_curry);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}

function show(a){
return a.map(function(b){

return b.style.display='',b;
});
}exports.default=

(0,_curry2.default)(show);