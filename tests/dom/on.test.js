import { addClass, trigger, on  } from '../../src/index'

test('trigger the click function and add class', () => {
    const div = document.createElement('div')
    const handleClick = function() {
        addClass('triggered')(this)
    }
    on('click', handleClick)(div)
    trigger('click')(div)

    expect(div.classList.contains('triggered')).toEqual(true)
})
