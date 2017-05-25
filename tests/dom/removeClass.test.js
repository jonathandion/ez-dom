import {removeClass, query} from '../../src/index';

test('remove class to element', () => {
  const div = document.createElement('div');
  removeClass('foo derp')(query(div));
  expect(div.classList.contains('foo', 'derp')).toEqual(false);
});
