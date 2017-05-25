/* @flow */

import curry from 'lodash/fp/curry';

function removeClass(
  classes: string,
  selectors: Array<HTMLElement>
): Array<HTMLElement> {
  const formatedClasses = classes.split(' ');
  return selectors.map(selector => {
    selector.classList.remove(...formatedClasses);
    return selector;
  });
}

export default curry(removeClass);
