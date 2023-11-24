const LoadablePlugin = require("@loadable/webpack-plugin");
const { override, useBabelRc, addWebpackPlugin,getBabelLoader } = require("customize-cra");
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


const removeBuiltinBabelConfig = (config) => {
  getBabelLoader(config).options.presets = [

  ];
  getBabelLoader(config).options.plugins = [
    ...getBabelLoader(config).options.plugins,
    new LoadablePlugin()
  ];
  return config;
};

module.exports = override(

);