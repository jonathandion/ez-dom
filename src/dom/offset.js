import query from './query'

const offset = selectors =>
    query(selectors).map(selector => selector.getBoundingClientRect())[0]

export default offset