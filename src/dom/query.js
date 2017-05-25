/* @flow */

function query(selector: any): Array<HTMLElement> {
  const elements = [];
  if (
    selector instanceof Object === false &&
    selector instanceof Element === false
  ) {
    elements.push(...document.querySelectorAll(selector));
  } else {
    elements.push(selector);
  }

  return Array.from(elements);
}

export default query;
