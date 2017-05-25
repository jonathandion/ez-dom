/* @flow */

import curry from 'lodash/fp/curry';
import query from './query';

function on(
  event: string,
  callback: Function,
  selectors: Array<HTMLElement>
): Array<HTMLElement> {
  return selectors.map(selector => {
    selector.addEventListener(event, function(e) {
      callback.call(null, e, query(selector));
    });
    return selector;
  });
}

export default curry(on);
