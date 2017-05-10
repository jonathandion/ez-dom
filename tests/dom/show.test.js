import { show } from '../../src/index'

test('it should show the element', () => {
    const div = document.createElement('div')
    div.style.display = 'none'
    show()(div)
    expect(div.style.display).toEqual('')
})
