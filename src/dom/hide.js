/* @flow */

function hide(selectors: Array<HTMLElement>): Array<HTMLElement> {
  return selectors.map(selector => {
    selector.style.display = 'none';
    return selector;
  });
}

export default hide;
