module.exports = function (api) {
  api.cache(true);

  return {
    presets: [
      require('@babel/preset-typescript')
    ],
    plugins: []
  };
}