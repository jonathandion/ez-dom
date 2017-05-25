"use strict";Object.defineProperty(exports, "__esModule", { value: true });

function html(selectors) {
  return selectors.map(function (selector) {return selector.innerHTML;}).toString();
}exports.default =

html;