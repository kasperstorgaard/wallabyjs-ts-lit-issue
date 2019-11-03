require('@babel/register')({
  extensions: ['.ts', '.js'],
	ignore: ['src/**/*.spec.ts']
});

const browserEnv = require('browser-env');
browserEnv();