/* eslint-disable react-hooks/rules-of-hooks */
/* config-overrides.js */

const LoadablePlugin = require("@loadable/webpack-plugin");
const { override, useBabelRc, addWebpackPlugin } = require("customize-cra");

module.exports = override(addWebpackPlugin(new LoadablePlugin()), useBabelRc());
