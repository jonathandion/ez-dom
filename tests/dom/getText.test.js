import {getText, query} from '../../src/index';

test('get and set text from an element', () => {
  const div = document.createElement('div');
  div.textContent = 'foo';
  expect(getText(query(div))).toEqual('foo');
});
