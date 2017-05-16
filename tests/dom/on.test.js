import { addClass, trigger, on  } from '../../lib/index'

test('trigger the click function and add class', () => {
    const div = document.createElement('div')
    const handleClick = function(e, el) {
        addClass('triggered')(el)
    }
    on('click')(handleClick)(div)
    trigger({ 'event' : 'click', detail : {} })(div)

    expect(div.classList.contains('triggered')).toEqual(true)
})
