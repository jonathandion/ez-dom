/* @flow */

import curry from 'lodash/fp/curry';

function setText(
  txt: string,
  selectors: Array<HTMLElement>
): Array<HTMLElement> {
  return selectors.map(selector => {
    selector.textContent = txt;
    return selector;
  });
}

export default curry(setText);
