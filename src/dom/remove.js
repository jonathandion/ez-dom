import query from './query'

const remove = () => selectors =>
    query(selectors).map(selector => selector.parentNode.removeChild(selector))

export default remove;