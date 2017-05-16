import curry from 'lodash/fp/curry'
import query from './query'

const addClass = (classes, selectors) => {
    const _classes = classes.split(' ')
    query(selectors).map(selector => selector.classList.add(..._classes))
    return selectors;
}

export default curry(addClass)


