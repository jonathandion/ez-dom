import { append } from '../../src/index'

test('should append element to parent', () => {
    const parent = document.createElement('div')
    const div = document.createElement('div')
    append(div)(parent)
    append(`<p> foo! </p>`)(parent)
    expect(parent.children.length).toEqual(2)
})