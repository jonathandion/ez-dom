import query from './query'
import curry from 'lodash/fp/curry'

const remove = selectors => {
    query(selectors).map(selector => selector.parentNode.removeChild(selector))
    return selectors;
}

export default curry(remove)