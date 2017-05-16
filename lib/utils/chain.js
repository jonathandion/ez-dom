"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var chain = function chain() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return function (el) {
    return args.map(function (a) {
      return a(el);
    });
  };
};

exports.default = chain;