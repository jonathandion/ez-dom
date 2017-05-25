/* @flow */

import curry from 'lodash/fp/curry';

function toggleClass(
  classes: string,
  selectors: Array<HTMLElement>
): Array<HTMLElement> {
  return selectors.map(selector => {
    selector.classList.toggle(classes);
    return selector;
  });
}

export default curry(toggleClass);
