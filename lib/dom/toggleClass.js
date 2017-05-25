'use strict';Object.defineProperty(exports, "__esModule", { value: true });

var _curry = require('lodash/fp/curry');var _curry2 = _interopRequireDefault(_curry);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

function toggleClass(
classes,
selectors)
{
  return selectors.map(function (selector) {
    selector.classList.toggle(classes);
    return selector;
  });
}exports.default =

(0, _curry2.default)(toggleClass);