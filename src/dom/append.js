/* @flow */

import curry from 'lodash/fp/curry';

function append(html: any, selectors: Array<HTMLElement>): Array<HTMLElement> {
  let innerHTML = html;
  return selectors.map(selector => {
    if (html instanceof Element === true) {
      innerHTML = html.outerHTML;
    }
    selector.innerHTML = selector.innerHTML + innerHTML;
    return selector;
  });
}

export default curry(append);
