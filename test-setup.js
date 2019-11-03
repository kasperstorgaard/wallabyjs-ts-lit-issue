require('@babel/register')({
  extensions: ['.ts', '.js'],
	ignore: /\/node_modules\/(?!lit-html)/
});

const browserEnv = require('browser-env');
browserEnv();