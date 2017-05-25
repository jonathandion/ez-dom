"use strict";Object.defineProperty(exports, "__esModule", { value: true });

function offset(selectors) {
  return selectors.map(function (selector) {
    return selector.getBoundingClientRect();
  })[0];
}exports.default =

offset;