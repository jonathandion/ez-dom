import { compose, addClass, css , query, hide, setText  } from '../../src/index'

test('it should chain all functions and call them', () => {
    const html = document.querySelector('html')

    compose(
        addClass('foo'),
        css({ backgroundColor: 'red' }),
        hide,
        setText('foo!')
    )(query('html'))

    expect(html.classList.contains('foo')).toBe(true)
    expect(html.style.backgroundColor).toBe('red')
    expect(html.style.display).toBe('none')
    expect(html.textContent).toBe('foo!')

})
