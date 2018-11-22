var trim = ''.trim || function () {
  return String(this).replace(/^\s+|\s+/g, '');
};
module.exports = trim;
