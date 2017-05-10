import { text } from '../../src/index'

test('get and set text from an element', () => {
    const div = document.createElement('div')
    $.text('foo')(div)
    const text = $.text()(div)
    expect(text).toEqual('foo')
})
