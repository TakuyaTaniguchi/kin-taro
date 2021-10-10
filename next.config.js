const { VanillaExtractPlugin } = require("@vanilla-extract/webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const { merge } = require("webpack-merge")

module.exports = {
  webpack: (config) => {
    return merge(config, {
      module: {
        rules: [
          {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, "css-loader"],
          },
        ],
      },
      plugins: [
        new VanillaExtractPlugin(),
        new MiniCssExtractPlugin({
          filename: "static/chunks/[contenthash].css",
          chunkFilename: "static/chunks/[contenthash].css",
        }),
      ],
    })
  },
  reactStrictMode: true,
}
