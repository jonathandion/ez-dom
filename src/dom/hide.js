import query from './query'

const hide = () => selectors =>
    query(selectors).map(selector => selector.style.display = 'none')

export default hide;