'use strict';Object.defineProperty(exports, "__esModule", { value: true });

var _curry = require('lodash/fp/curry');var _curry2 = _interopRequireDefault(_curry);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

function trigger(_ref,

selectors)
{var event = _ref.event,detail = _ref.detail;
  return selectors.map(function (selector) {
    selector.dispatchEvent(new CustomEvent(event, { detail: detail }));
    return selector;
  });
}exports.default =

(0, _curry2.default)(trigger);