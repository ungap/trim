var trim = require('../cjs');
test();

function test() {
  console.assert(trim.call(' both ') === 'both');
  console.assert(trim.call('end ') === 'end');
  console.assert(trim.call(' start') === 'start');
}
