import {css, query} from '../../src/index';

test('apply style to element', () => {
  const div = document.createElement('div');
  css({backgroundColor: 'blue', fontSize: '20px'})(query(div));
  expect(div.style.backgroundColor).toEqual('blue');
  expect(div.style.fontSize).toEqual('20px');
});
