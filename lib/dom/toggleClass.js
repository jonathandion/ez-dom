'use strict';Object.defineProperty(exports,'__esModule',{value:!0});var _query=require('./query'),_query2=_interopRequireDefault(_query);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}var toggleClass=function(a){return function(b){return(0,_query2.default)(b).map(function(c){return c.classList.toggle(a)})}};exports.default=toggleClass;