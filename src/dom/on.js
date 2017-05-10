import query from './query'

const on = (event, callback) => selectors => {
    query(selectors).map(selector => selector.addEventListener(event, callback))
}

export default on;