import {remove, query} from '../../src/index';

test('remove element from parent', () => {
  const parent = document.createElement('div');
  const target = document.createElement('p');
  parent.appendChild(target);
  remove(query(target));
  expect(parent.children.length).toEqual(0);
});
