const myBirthCertificate = {
  name: 'Eduardo',
  birth: '14-12-1999',
  ageGroup: '',
};

// const ageGroup = function (certificate, ageGroup) {
//   certificate.ageGroup = ageGroup;
//   return certificate;
// };

const ageGroup = function (certificate, ageGroup) {
  return {
    ...certificate,
    ageGroup,
  };
};

console.log(ageGroup(myBirthCertificate, 'Adult'));

console.log(myBirthCertificate);
