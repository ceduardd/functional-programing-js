const invokeIf = (condition, fnTrue, fnFalse) =>
  condition ? fnTrue() : fnFalse();

const showWelcome = () => console.log('Wellcome');
const showUnauthorized = () => console.log('Unauthorized!!!');

// invokeIf(true, showWelcome, showUnauthorized);
// invokeIf(false, showWelcome, showUnauthorized);

const userLogs = (userName) => (message) =>
  console.log(`${userName} - ${message}`);

const log = userLogs('Eduardo');

for (let i = 0; i < 5; i++) {
  log(`Saving data ${i} ... done!`);
} // simulator log
