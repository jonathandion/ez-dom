'use strict';Object.defineProperty(exports,'__esModule',{value:!0});var _query=require('./query'),_query2=_interopRequireDefault(_query);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}var offset=function(){return function(a){return(0,_query2.default)(a).map(function(b){return b.getBoundingClientRect()})[0]}};exports.default=offset;