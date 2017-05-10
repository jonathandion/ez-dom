import query from './query'

const append = (html = '') => selectors =>
    query(selectors).map(selector => {
        if(html instanceof Element === true) html = html.outerHTML;
        selector.innerHTML = selector.innerHTML + html
    })

export default append;