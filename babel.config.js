module.exports = function (api) {
  api.cache(true);

  return {
    presets: [
      require('@babel/preset-typescript')
    ],
    plugins: [
      [require('@babel/plugin-syntax-dynamic-import')],
      [require('babel-plugin-transform-imports')],
      [require('@babel/plugin-syntax-import-meta')],
      [require('@babel/plugin-proposal-decorators'), {'decoratorsBeforeExport': true}],
      [require('@babel/plugin-proposal-class-properties'), {loose: true}],
      [require('@babel/plugin-transform-modules-commonjs')]
    ].filter(Boolean)
  };
}