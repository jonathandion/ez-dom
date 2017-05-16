import curry from 'lodash/fp/curry'
import query from './query'

const css = (style, selectors) => {
    query(selectors).map(selector => Object.assign(selector.style, style))
    return selectors;
}

export default curry(css)