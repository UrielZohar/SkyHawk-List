const takeTheFirstNotUndefined = (...args) => {
  for (let i = 0; i < args.length; i++) {
    if (args[i] !== undefined) {
      return args[i];
    }
  }
};

export { takeTheFirstNotUndefined };