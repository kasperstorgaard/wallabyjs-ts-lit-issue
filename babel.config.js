module.exports = function (api) {
  api.cache(true);

  return {
    test: ['./src/**/*.ts', './node_modules/lit-html/lit-html.js'],
    exclude: [/node_modules\/(?!lit-)/],
    presets: [
      require('@babel/preset-typescript')
    ],
    plugins: [
      [require('babel-plugin-transform-imports')]
    ]
  };
}