import { remove } from '../../src/index'

test('remove element from parent', () => {
    const parent = document.createElement('div')
    const target = document.createElement('p')
    parent.appendChild(target)
    remove()(target)
    expect(parent.children.length).toEqual(0)
})
