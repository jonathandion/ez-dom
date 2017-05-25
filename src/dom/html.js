/* @flow */

function html(selectors: Array<HTMLElement>): string {
  return selectors.map(selector => selector.innerHTML).toString();
}

export default html;
