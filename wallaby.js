process.env.BABEL_ENV = 'wallaby';

module.exports = function (wallaby) {
  return {
    files: [
      'src/**/*.ts',
      'node_modules/lit-html/lit-html.js',
      '!src/**/*.spec.ts'
    ],
    tests: [
      'src/**/*.spec.ts'
    ],
    env: {
      type: 'node',
      params: {
        runner: `-r ${require.resolve('esm')}`
      }
    },
    compilers: {
      '**/*.(js|ts)': wallaby.compilers.babel(),
    },
    setup() {
      require('browser-env')();
    },
    testFramework: 'ava',
    debug: true
  };
};