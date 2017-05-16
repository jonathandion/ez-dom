import { trigger } from '../../src/index'

test('it should trigger an event', () => {
    const html = document.querySelector('html')
    let detail = {};

    html.addEventListener('click', e => {
        detail = e.detail;
    })
    
    trigger({ event : 'click', detail : { 'derp' : 'derp' } })(html)
    expect(detail).toEqual( { 'derp' : 'derp' } )

})