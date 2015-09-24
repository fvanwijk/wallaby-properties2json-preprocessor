# Wallaby properties2JSON preprocessor

Preprocessor for converting .properties files into JSON files.

## Usage

`npm install --save-dev wallaby-properties2json-preprocessor`

In your Wallaby config file add the preprocessor, where the second argument are the config options:

```javascript
preprocessors: {
  'test.properties': function (file) {
    return require('wallaby-properties2json-preprocessor').transform(file, {
      dist: 'test/mock/json/',
      tree: true
    });
  }
}
```

Set the `dist` option to the directory where Wallaby should serve the output. Default is 'spec/javascripts/fixtures/json/'
which is the same default path as jasmine-jquery uses for reading JSON fixtures.

If `tree` is true, the keys in the properties are outputted as a JSON tree, delimited by colons instead of key/value pairs.

```
// test.properties
parent.childA=value1
parent.childB=value2

// test.json
{
  "parent": {
    "childA": "value1",
    "childB": "value2"
  }
}
```
