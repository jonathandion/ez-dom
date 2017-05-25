"use strict";Object.defineProperty(exports, "__esModule", { value: true });

function getText(selectors) {
  return selectors.map(function (selector) {
    return selector.textContent.toString();
  })[0];
}exports.default =

getText;