import { addClass } from '../../src/index'

test('add class to element', () => {
    const div = document.createElement('div')
    addClass('foo derp')(div)
    expect(div.classList.contains('foo','derp')).toEqual(true)
})