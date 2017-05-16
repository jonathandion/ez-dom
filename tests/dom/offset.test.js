import { offset } from '../../lib/index'

test('it should return', () => {
    const div = document.createElement('div')
    const os = offset(div)

    expect(os).toEqual({
        bottom: 0,
        height: 0,
        left: 0,
        right: 0,
        width: 0,
        top: 0
    })

})