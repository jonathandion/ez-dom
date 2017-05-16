import { html } from '../../lib/index'

test('get html', () => {
    const div = document.createElement('div')
    const child = document.createElement('div')
    child.textContent = 'Hello'
    div.appendChild(child)
    expect(html(div)).toEqual('<div>Hello</div>')
})