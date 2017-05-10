import { chain, addClass, css , query, hide, text  } from '../../src/index'

test('it should chain all functions and call them', () => {
    const html = document.querySelector('html')

    chain(
        query('html'),
        addClass('foo'),
        css({ backgroundColor: 'red' }),
        hide(),
        text('foo!')
    )

    expect(html.classList.contains('foo')).toBe(true)
    expect(html.style.backgroundColor).toBe('red')
    expect(html.style.display).toBe('none')
    expect(html.textContent).toBe('foo!')

})
