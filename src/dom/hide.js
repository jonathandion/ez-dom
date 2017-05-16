import query from './query'
// import curry from 'lodash/fp/curry'

const hide = selectors => {
    query(selectors).map(selector => selector.style.display = 'none')
    return selectors;
}

export default hide