'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _curry = require('lodash/fp/curry');

var _curry2 = _interopRequireDefault(_curry);

var _query = require('./query');

var _query2 = _interopRequireDefault(_query);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var text = function text(txt, selectors) {
    return (0, _query2.default)(selectors).map(function (selector) {
        if (txt) selector.textContent = txt;else return selector.textContent;
    }).toString();
};

exports.default = (0, _curry2.default)(text);