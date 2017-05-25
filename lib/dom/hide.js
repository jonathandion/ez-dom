'use strict';Object.defineProperty(exports, "__esModule", { value: true });

function hide(selectors) {
  return selectors.map(function (selector) {
    selector.style.display = 'none';
    return selector;
  });
}exports.default =

hide;