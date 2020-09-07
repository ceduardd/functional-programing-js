// this a simple example of the compose functions

const both = (date) => appendAMPM(civilianHours(date));

const both = compose(civilianHours, appendAMPM);

both(new Date());

const compose = (...fns) => (arg) =>
  fns.reduce((composed, f) => f(composed), arg);
