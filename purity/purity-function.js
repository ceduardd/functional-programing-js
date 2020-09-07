const eduardo = {
  name: 'Eduardo',
  canWrite: false,
  canRead: false,
};

// function selfEducate() {
//   eduardo.canWrite = true;
//   eduardo.canRead = true;
//   return eduardo;
// }

// const selfEducate = (person) => {
//   eduardo.canWrite = true;
//   eduardo.canRead = true;
//   return person;
// };

const selfEducate = (person) => ({
  // this is a purity function
  ...person,
  canWrite: true,
  canRead: true,
});

console.log(selfEducate(eduardo));

console.log(eduardo);
