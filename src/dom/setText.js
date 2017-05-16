import query from './query'
import curry from 'lodash/fp/curry'

const setText = (txt, selectors) => {
    query(selectors).map(selector => selector.textContent = txt)
    return selectors;
}

export default curry(setText);