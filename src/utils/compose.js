const chain = (...args: Array<Function>) => (el: Array<HTMLElement>) =>
  args.map(a => a(el));

export default chain;
