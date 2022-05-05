module.exports = {
  module: {
    rules: [
      {
        test: /\.m?jsx?$/,
        resolve: {
          extensions: [".js", ".jsx"],
        },
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-react",
                {
                  runtime: "automatic",
                },
              ],
              "@babel/preset-env",
            ],
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
    ],
  },
};
