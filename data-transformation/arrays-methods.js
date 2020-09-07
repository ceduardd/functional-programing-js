const schools = ['Harvard', 'MIT', 'Oxford', 'Cambridge', 'Stanford'];

// console.log(schools.join(', '));

const hSchools = schools.filter((school) => school[0] === 'H');

const cutSchool = (cut, schools) => schools.filter((school) => school !== cut);

const hightSchools = schools.map((school) => `${school} Hight School`);

const schoolObjects = schools.map((school) => ({
  name: school,
}));

const updateName = (oldName, name, arr) => {
  return arr.map((item) => (item.name === oldName ? { ...item, name } : item));
};

console.log(updateName('MIT', 'UG', schoolObjects));

// console.log(cutSchool('MIT', schools).join(', '));

// console.log(hSchools);

// console.log(schools);
