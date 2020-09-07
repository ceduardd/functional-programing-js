const list = [{ title: 'Red Rad' }, { title: 'Blue' }, { title: 'Green' }];

// const addColor = function (newColor, colors) {
//   colors.push({ title: newColor }); // push isn't inmutable function
//   return colors;
// };

// const addColor = function (newColor, colors) {
//   return colors.concat({ title: newColor }); // concat is an inmutbale function
// };

const addColor = (title, list) => [...list, { title }]; // you can use the spread operator

console.log(addColor('Pink', list));

console.log(list);
