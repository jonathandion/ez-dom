import {append, query} from '../../src/index';

test('should append element to parent', () => {
  const parent = document.createElement('div');
  const div = document.createElement('div');
  const el = query(parent);
  append(div)(el);
  append(`<p> foo! </p>`)(el);
  expect(parent.children.length).toEqual(2);
});
