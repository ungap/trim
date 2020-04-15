var trim = require('../cjs');
test();

delete require.cache[require.resolve('../cjs')];
var i = 0;
var original = String.prototype.trim;
delete String.prototype.trim;
Object.defineProperty(String.prototype, 'trim', {
  get() {
    return i++ < 1 ? void 0 : original;
  }
});

var trim = require('../cjs');
test();

function test() {
  console.assert(trim.call(' both ') === 'both');
  console.assert(trim.call('end ') === 'end');
  console.assert(trim.call(' start') === 'start');
}
