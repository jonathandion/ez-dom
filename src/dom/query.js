const query = selector => {
    if(selector instanceof Object === false && selector instanceof Element === false)
        selector = document.querySelectorAll(selector)
    if(selector instanceof Element === true)
        selector = [selector]
    return Array.from(selector)
}

export default query