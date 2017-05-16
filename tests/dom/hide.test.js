import { hide } from '../../src/index'

test('hide the element', () => {
    const div = document.createElement('div')
    hide(div)
    expect(div.style.display).toEqual('none')
})