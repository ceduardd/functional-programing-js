const schools = {
  UG: 10,
  UCSG: 6,
  ESPOL: 12,
  EPN: 11,
  UTPL: 13,
};

const schoolResultsArray = Object.keys(schools).map((key) => ({
  name: key, // UG
  wins: schools[key], // 10
}));

console.log(schoolResultsArray);
