// const countDown = (value, printValue) => {
//   printValue(value);
//   return value > 0 ? countDown(value - 1, printValue) : value;
// };

const printValue = (value) => console.log(value);

// countDown(10, printValue);

const countdown = (value, printValue, delay = 1000) => {
  printValue(value);
  return value > 0
    ? setTimeout(() => countdown(value - 1, printValue, delay), delay)
    : value;
};

countdown(10, printValue);
