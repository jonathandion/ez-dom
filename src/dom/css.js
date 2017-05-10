import query from './query'

const css = style => selectors =>
    query(selectors).map(selector => Object.assign(selector.style, style))

export default css;