'use strict';Object.defineProperty(exports, "__esModule", { value: true });

var _curry = require('lodash/fp/curry');var _curry2 = _interopRequireDefault(_curry);
var _query = require('./query');var _query2 = _interopRequireDefault(_query);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

function on(
event,
callback,
selectors)
{
  return selectors.map(function (selector) {
    selector.addEventListener(event, function (e) {
      callback.call(null, e, (0, _query2.default)(selector));
    });
    return selector;
  });
}exports.default =

(0, _curry2.default)(on);