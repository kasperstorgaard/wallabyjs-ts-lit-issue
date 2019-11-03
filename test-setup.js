require('@babel/register')({
  extensions: ['.ts', '.js']
});

const browserEnv = require('browser-env');
browserEnv();