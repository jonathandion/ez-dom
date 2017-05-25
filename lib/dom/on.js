'use strict';Object.defineProperty(exports,'__esModule',{value:!0});

var _curry=require('lodash/fp/curry'),_curry2=_interopRequireDefault(_curry),_query=require('./query'),_query2=_interopRequireDefault(_query);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}


function on(a,b,c)



{
return c.map(function(d){



return d.addEventListener(a,function(f){b.call(null,f,(0,_query2.default)(d))}),d;
});
}exports.default=

(0,_curry2.default)(on);