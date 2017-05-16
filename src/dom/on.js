import curry from 'lodash/fp/curry'
import query from './query'

const on = (event, callback, selectors) => {
    query(selectors).map(selector => {
        selector.addEventListener(event, (e) => {
            callback(e, selector)
        })
    })
    return selectors;
}

export default curry(on);