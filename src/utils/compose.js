const chain = (...args) => el => args.map(a => a(el))

export default chain