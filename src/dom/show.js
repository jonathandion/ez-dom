/* @flow */

import curry from 'lodash/fp/curry';

function show(selectors: Array<HTMLElement>): Array<HTMLElement> {
  return selectors.map(selector => {
    selector.style.display = '';
    return selector;
  });
}

export default curry(show);
