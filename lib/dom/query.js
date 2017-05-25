"use strict";Object.defineProperty(exports, "__esModule", { value: true });function _toConsumableArray(arr) {if (Array.isArray(arr)) {for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {arr2[i] = arr[i];}return arr2;} else {return Array.from(arr);}}

function query(selector) {
  var elements = [];
  if (
  selector instanceof Object === false &&
  selector instanceof Element === false)
  {
    elements.push.apply(elements, _toConsumableArray(document.querySelectorAll(selector)));
  } else {
    elements.push(selector);
  }

  return Array.from(elements);
}exports.default =

query;