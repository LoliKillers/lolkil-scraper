var fs = require('fs');
var path = require('path');

var dataFileName = path.join(__dirname, 'country-codes.txt');
var file = fs.readFileSync(dataFileName, {encoding: 'utf8'});

var lines = file.split('\n');
lines.pop();

var firstChars = {};

for (var i in lines) {
  var charCode = lines[i].charCodeAt(0);
  firstChars[charCode] = true;
}

firstChars = Object.keys(firstChars).map(function(str) {
  return parseInt(str);
});

module.exports = function(char) {
  return lines.indexOf(char) !== -1;
};

module.exports.isFirstCharCode = function(charCode) {
  return firstChars.indexOf(charCode) !== -1;
};
