import curry from 'lodash/fp/curry'
import query from './query';

const toggleClass = (_class, selectors) => {
    query(selectors).map(selector => selector.classList.toggle(_class))
    return selectors;
}

export default curry(toggleClass)