const chain = (el, ...args) => {
    args.map(a => a(el))
}

export default chain;