import {addClass, query} from '../../src/index';

test('add class to element', () => {
  const div = document.createElement('div');
  addClass('foo derp')(query(div));
  expect(div.classList.contains('foo', 'derp')).toEqual(true);
});
