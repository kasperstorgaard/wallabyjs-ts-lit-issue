const path = require('path');

export default {
  "require": [
    "esm",
    "./test-setup.js"
  ],
  "files":[
    "src/**/*.spec.ts"
  ],
  "babel": {
    "extensions": ["ts", "js"],
    "testOptions": {
      "babelrc": false,
      "configFile": path.resolve(__dirname, "babel.config.js")
    }
  }
}