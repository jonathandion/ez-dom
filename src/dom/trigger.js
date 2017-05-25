/* @flow */

import curry from 'lodash/fp/curry';

function trigger(
  {event, detail}: {event: string, detail: Object},
  selectors: Array<HTMLElement>
): Array<HTMLElement> {
  return selectors.map(selector => {
    selector.dispatchEvent(new CustomEvent(event, {detail: detail}));
    return selector;
  });
}

export default curry(trigger);
