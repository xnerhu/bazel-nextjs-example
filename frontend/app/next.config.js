const { resolve } = require("path");

const INCLUDE = resolve(__dirname, "src");

module.exports = {
  webpack5: true,
  generateBuildId: () => "bazel",
  webpack: (config) => {
    config.module.rules.unshift({
      test: /\.(png|gif|jpg|woff2|ttf|svg)$/,
      include: INCLUDE,
      use: [
        {
          loader: "file-loader",
          options: {
            esModule: false,
            publicPath: "/_next/static/resources/",
            outputPath: "static/resources/",
          },
        },
      ],
    });

    // config.resolve = {
    //   ...config.resolve,
    //   symlinks: false,
    // };
    // config.resolveLoader = {
    //   ...config.resolveLoader,
    //   symlinks: false,
    // };

    return config;
  },
};
