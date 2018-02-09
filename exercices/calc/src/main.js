const sum = (x, y) => x + y;
const sub = (x, y) => x - y;
const mult = (x, y) => x * y;
const div = (x, y) => ((y === 0) ? 'division by 0 is not possible' : x / y);

export { sum, sub, mult, div };
