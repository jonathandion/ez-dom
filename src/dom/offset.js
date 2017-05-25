/* @flow */

function offset(selectors: Array<HTMLElement>): Object {
  return selectors.map(selector => {
    return selector.getBoundingClientRect();
  })[0];
}

export default offset;
