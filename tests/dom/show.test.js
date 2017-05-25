import {show, query} from '../../src/index';

test('it should show the element', () => {
  const div = document.createElement('div');
  div.style.display = 'none';
  show(query(div));
  expect(div.style.display).toEqual('');
});
