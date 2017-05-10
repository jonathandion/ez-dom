import { toggleClass } from '../../src/index'

test('toggle a class on an element', () => {
    const div = document.createElement('div')
    div.classList.add('myToggleClass')
    toggleClass('myToggleClass')(div)
    expect(div.classList.contains('myToggleClass')).toEqual(false)
})