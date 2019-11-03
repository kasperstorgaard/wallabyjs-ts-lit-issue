require('@babel/register')({
  extensions: ['.ts', '.js'],
	ignore: [/node_modules\/(?!lit-html)/, 'src/**/*.spec.ts']
});

const browserEnv = require('browser-env');
browserEnv();