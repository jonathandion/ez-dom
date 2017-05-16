import query from './query';
import curry from 'lodash/fp/curry'

const show = selectors => {
    query(selectors).map(selector => selector.style.display = '')
    return selectors;
}

export default curry(show)