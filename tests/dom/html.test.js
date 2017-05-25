import {html, query} from '../../lib/index';

test('get html', () => {
  const div = document.createElement('div');
  const child = document.createElement('div');
  child.textContent = 'Hello';
  div.appendChild(child);
  expect(html(query(div))).toEqual('<div>Hello</div>');
});
