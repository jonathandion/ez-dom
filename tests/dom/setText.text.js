import { setText } from '../../src/index'

test('get and set text from an element', () => {
    const div = document.createElement('div')
    setText('foo')(div)
    expect(div.textContent).toEqual('foo')
})
