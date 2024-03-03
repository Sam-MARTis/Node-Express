const helloFunc = require('./function-module.js')
const data = require('./data-module.js')
console.log(data);

helloFunc(data.John);
helloFunc(data.Mathew);
helloFunc(data.Mark);
