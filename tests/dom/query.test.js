import { query } from '../../src/index'

test('should query one or more dom elements', () => {
    const html = document.querySelector('html')
    const elements = ['foo','bar','derp'].map(name => {
        const el = document.createElement('div')
        el.textContent = name
        el.classList.add(name)
        html.appendChild(el)
        return el;
    })
    const el = query('div')
    expect(el).toEqual(elements);
})