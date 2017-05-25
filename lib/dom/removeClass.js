'use strict';Object.defineProperty(exports, "__esModule", { value: true });

var _curry = require('lodash/fp/curry');var _curry2 = _interopRequireDefault(_curry);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _toConsumableArray(arr) {if (Array.isArray(arr)) {for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {arr2[i] = arr[i];}return arr2;} else {return Array.from(arr);}}

function removeClass(
classes,
selectors)
{
  var formatedClasses = classes.split(' ');
  return selectors.map(function (selector) {var _selector$classList;
    (_selector$classList = selector.classList).remove.apply(_selector$classList, _toConsumableArray(formatedClasses));
    return selector;
  });
}exports.default =

(0, _curry2.default)(removeClass);