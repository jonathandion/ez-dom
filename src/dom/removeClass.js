import curry from 'lodash/fp/curry'
import query from './query'

const removeClass = (classes, selectors) => {
    const _classes = classes.split(' ')
    query(selectors).map(selector => selector.classList.remove(..._classes))
    return selectors;
}

export default curry(removeClass)