/* @flow */

import curry from 'lodash/fp/curry';

function remove(selectors: Array<HTMLElement>): Array<HTMLElement> {
  return selectors.map(selector => {
    if (selector.parentNode) {
      selector.parentNode.removeChild(selector);
    }
    return selector;
  });
}

export default curry(remove);
