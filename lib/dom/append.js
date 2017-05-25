'use strict';Object.defineProperty(exports, "__esModule", { value: true });

var _curry = require('lodash/fp/curry');var _curry2 = _interopRequireDefault(_curry);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

function append(html, selectors) {
  var innerHTML = html;
  return selectors.map(function (selector) {
    if (html instanceof Element === true) {
      innerHTML = html.outerHTML;
    }
    selector.innerHTML = selector.innerHTML + innerHTML;
    return selector;
  });
}exports.default =

(0, _curry2.default)(append);