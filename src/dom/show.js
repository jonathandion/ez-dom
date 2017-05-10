import query from './query';

const show = () => selectors =>
    query(selectors).map(selector => selector.style.display = '')

export default show;