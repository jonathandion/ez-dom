import { getText } from '../../src/index'

test('get and set text from an element', () => {
    const div = document.createElement('div')
    div.textContent = 'foo'
    expect(getText(div)).toEqual('foo')
})
