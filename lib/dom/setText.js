'use strict';Object.defineProperty(exports,'__esModule',{value:!0});var _query=require('./query'),_query2=_interopRequireDefault(_query),_curry=require('lodash/fp/curry'),_curry2=_interopRequireDefault(_curry);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}var setText=function(a,b){return(0,_query2.default)(b).map(function(c){return c.textContent=a}),b};exports.default=(0,_curry2.default)(setText);