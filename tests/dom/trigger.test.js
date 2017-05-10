import { trigger, query } from '../../src/index'

test('it should trigger an event', () => {
    const html = document.querySelector('html')
    let data = {};

    html.addEventListener('click', e => {
        data = e.detail;
    })

    trigger('click', { data : 'foo' })(html)
    expect(data).toEqual({ data : 'foo' })

})