import query from './query'

const html = selectors =>
    query(selectors).map(selector => selector.innerHTML.toString())[0]

export default html