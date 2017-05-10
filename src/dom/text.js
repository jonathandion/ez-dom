import query from './query'

const text = txt => selectors => {
    return query(selectors).map(selector => {
        if(txt) selector.textContent = txt;
        else return selector.textContent
    }).toString()
}

export default text;