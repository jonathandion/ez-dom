import query from './query'

const getText = selectors =>
    query(selectors).map(selector =>  selector.textContent).toString()

export default getText