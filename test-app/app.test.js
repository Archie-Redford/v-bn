const assert = require('node:assert');
const { runSmokeTest } = require('./app.js');

assert.strictEqual(runSmokeTest(), true);
console.log('app.test.js: OK');
