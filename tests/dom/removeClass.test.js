import { removeClass } from '../../src/index'

test('remove class to element', () => {
    const div = document.createElement('div')
    removeClass('foo derp')(div)

    expect(div.classList.contains('foo','derp')).toEqual(false)
})