process.env.BABEL_ENV = 'wallaby';

module.exports = function (wallaby) {
  return {
    files: [
      'src/**/*.ts',
      '!src/**/*.spec.ts',
      '!src/**/*.d.ts',
      '!src/**/*-model.ts',
      'node_modules/lit-html/lit-html.js'
    ],
    tests: [
      'src/**/*.spec.ts'
    ],
    env: {
      type: 'node',
      runner: 'node'
    },
    compilers: {
      '**/*.(ts|js)': wallaby.compilers.babel()
    },
    testFramework: 'ava',
    debug: true
  };
};