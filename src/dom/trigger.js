import curry from 'lodash/fp/curry'
import query from './query'

const trigger = ({ event, detail }, selectors) => {
    query(selectors).map(selector => {
        selector.dispatchEvent(new CustomEvent(event, { detail: detail } ))
    })
    return selectors;
}

export default curry(trigger)


