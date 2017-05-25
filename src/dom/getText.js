/* @flow */

function getText(selectors: Array<HTMLElement>): string {
  return selectors.map(selector => {
    return selector.textContent.toString();
  })[0];
}

export default getText;
