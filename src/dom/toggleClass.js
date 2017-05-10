import query from './query';

const toggleClass = _class => selectors =>
    query(selectors).map(selector => selector.classList.toggle(_class))

export default toggleClass;