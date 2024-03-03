const path = require('path');

const myPath = path.resolve(__dirname, '01_modules', 'function-module.js');
console.log(myPath)
console.log(path.basename(myPath))