const ages = [13, 45, 34, 31, 49, 23];

// const maxAge = ages.reduce((max, age) => {
//   console.log(`${age} > ${max} = ${age > max}`);
//   if (age > max) {
//     return age;
//   } else {
//     max;
//   }
// }, 0);

const max = ages.reduce((max, value) => (value > max ? value : max), 0);

console.log(max);

// arr.reduce((initialValue, item) => {}, initialValue);
