'use strict';Object.defineProperty(exports,'__esModule',{value:!0});

var _curry=require('lodash/fp/curry'),_curry2=_interopRequireDefault(_curry);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}

function trigger(a,b)


{var c=a.event,d=a.detail;
return b.map(function(e){

return e.dispatchEvent(new CustomEvent(c,{detail:d})),e;
});
}exports.default=

(0,_curry2.default)(trigger);