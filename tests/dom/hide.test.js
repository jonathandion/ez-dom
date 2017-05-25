import {hide, query} from '../../src/index';

test('hide the element', () => {
  const div = document.createElement('div');
  hide(query(div));
  expect(div.style.display).toEqual('none');
});
