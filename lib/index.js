var p2list = require('properties-parser');
var p2tree = require('java.properties.js').default;
var path = require('path');

var createProperties2JsonPreprocessor = function(file, config) {
  config = typeof config === 'object' ? config : {};

  var distPath = config.dist || 'spec/javascripts/fixtures/json/';
  var fileName = path.basename(file.path).replace(/\.[^/.]+$/, '');

  console.log('Writing output: ', path.normalize(distPath + '/' + fileName + '.json'));
  file.rename(path.normalize(distPath + '/' + fileName + '.json'));

  var content = config.tree ? p2tree(file.content) : p2list.parse(file.content);

  return JSON.stringify(content);
};

module.exports = {
  transform: createProperties2JsonPreprocessor
};
