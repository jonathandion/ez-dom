/* @flow */

import curry from 'lodash/fp/curry';

function addClass(
  classes: string,
  selectors: Array<HTMLElement>
): Array<HTMLElement> {
  const formatedClasses = classes.split(' ');
  return selectors.map(selector => {
    selector.classList.add(...formatedClasses);
    return selector;
  });
}
export default curry(addClass);
