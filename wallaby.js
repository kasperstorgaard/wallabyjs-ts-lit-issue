process.env.BABEL_ENV = 'wallaby';

module.exports = function (wallaby) {
  return {
    files: [
      'src/**/*.ts',
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
      'src/**/*.(js|ts)': wallaby.compilers.babel(),
    },
    setup() {
      require('browser-env')();
    },
    testFramework: 'ava',
    debug: true
  };
};