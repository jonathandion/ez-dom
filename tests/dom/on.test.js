import {addClass, trigger, on, query} from '../../lib/index';

test('trigger the click function and add class', () => {
  const div = document.createElement('div');
  const handleClick = function(e, el) {
    addClass('triggered')(el);
  };
  on('click')(handleClick)(query(div));
  trigger({event: 'click', detail: {}})(query(div));

  expect(div.classList.contains('triggered')).toEqual(true);
});
