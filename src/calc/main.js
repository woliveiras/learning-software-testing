module.exports = {
  'sum': (x, y) => x + y,
  'sub': (x, y) => x - y,
  'mult': (x, y) => x * y,
  'div': (x, y) => {
    return (y === 0)
      ? 'division by 0 is not possible'
      : x / y;
  }
};
