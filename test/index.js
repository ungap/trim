var trim = require('../cjs');
test();

delete require.cache[require.resolve('../cjs')];
delete String.prototype.trim;

var trim = require('../cjs');
test();

function test() {
  console.assert(trim.call(' both ') === 'both');
  console.assert(trim.call('end ') === 'end');
  console.assert(trim.call(' start') === 'start');
}
