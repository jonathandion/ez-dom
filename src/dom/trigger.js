import query from './query'

const trigger = (event,data) => selectors => {
    query(selectors).map(selector =>
        selector.dispatchEvent(new CustomEvent(event, { 'detail' : data })))
}

export default trigger;


