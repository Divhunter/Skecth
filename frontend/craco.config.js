const ManifestPluginModule = require("webpack-manifest-plugin");
const WebpackManifestPlugin =
  ManifestPluginModule.WebpackManifestPlugin ||
  ManifestPluginModule.default ||
  ManifestPluginModule;

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  babel: {
    plugins: [
      "@babel/plugin-proposal-class-properties",
      "@babel/plugin-proposal-optional-chaining"
    ],
  },
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.devServer = {
        ...webpackConfig.devServer,
        hot: true,
        liveReload: true,
      };

      webpackConfig.watchOptions = {
        ignored: /node_modules/,
        aggregateTimeout: 300,
        poll: 1000,
      };

      webpackConfig.plugins = webpackConfig.plugins.filter(
        (plugin) => !(plugin instanceof WebpackManifestPlugin)
      );

      webpackConfig.output.filename = "static/js/[name].js";
      webpackConfig.output.chunkFilename = "static/js/[name].chunk.js";

      webpackConfig.plugins = webpackConfig.plugins.map((plugin) => {
        if (plugin instanceof MiniCssExtractPlugin) {
          return new MiniCssExtractPlugin({
            ...plugin.options,
            filename: "static/css/[name].css",
            chunkFilename: "static/css/[name].chunk.css",
          });
        }
        return plugin;
      });

      webpackConfig.plugins.push(
        new WebpackManifestPlugin({
          fileName: "asset-manifest.json",
          publicPath: "/static/",
          writeToFileEmit: true,
          map: (file) => {
            if (file.name.startsWith("main")) {
              if (file.name.endsWith(".js")) {
                file.path = "/static/js/main.js";
              } else if (file.name.endsWith(".css")) {
                file.path = "/static/css/main.css";
              }
            }
            return file;
          },
        })
      );

      return webpackConfig;
    },
  },
  env: {
    FAST_REFRESH: true,
  },
};