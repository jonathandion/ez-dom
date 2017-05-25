/* @flow */

import curry from 'lodash/fp/curry';

function css(style: Object, selectors: Array<HTMLElement>): Array<HTMLElement> {
  return selectors.map(selector => {
    Object.assign(selector.style, style);
    return selector;
  });
}

export default curry(css);
