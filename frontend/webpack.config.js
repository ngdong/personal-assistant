const { merge } = require('webpack-merge');

module.exports = (config) => {
  const isProd = config.mode === "production";
  const tailwindConfig = require("./tailwind.config.js")(isProd);
  return merge(config, {
    module: {
      rules: [
        {
          test: /\.scss$/,
          loader: 'postcss-loader',
          options: {
            ident: 'postcss',
            syntax: 'postcss-scss',
            plugins: () => [
              require('postcss-import')( {path: ['./src/styles'] }),
              require('tailwindcss')(tailwindConfig),
              require('autoprefixer'),
            ]
          }
        }
      ]
    }
  });
}
