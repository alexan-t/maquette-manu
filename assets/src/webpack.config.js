const path = require('path');
const isProduction = process.env.NODE_ENV === 'production';
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const LiveReloadPlugin = require('webpack-livereload-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const config = {
  entry: {
    main: "./js/app.js"
  },
  output: {
    filename: "js/build.js",
    path: path.resolve(__dirname, "../build"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(jpe?g|svg|png|gif|ico|eot|ttf|woff2?)(\?v=\d+\.\d+\.\d+)?$/i,
        type: 'asset/resource',
    },
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "../",
            }
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: isProduction ? false : true,
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  "autoprefixer",
                ]
              },
              sourceMap: isProduction ? false : true,
            }
          },
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
              sassOptions: {
                indentWidth: 2,
                outputStyle: 'expanded'
              },
              sourceMap: isProduction ? false : true,
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/style.css',
      chunkFilename: "[id].css"
    }),
    new BundleAnalyzerPlugin(),
    new LiveReloadPlugin(),
    // new BrowserSyncPlugin({
    //   notify: false,
    //   host: 'localhost',
    //   port: 3000,
    //   logLevel: 'silent',
    //   files: ['./*.php'],
    //   proxy:  'http://localhost/wordpress/',
    //   reload: false, 
    // })
  ]
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";
    config.optimization = {
        minimize: true,
        minimizer: [ new TerserPlugin(), new CssMinimizerPlugin() ]
      };
  } else {
    config.mode = "development";
    config.devtool = "inline-source-map";
    config.optimization = {
        minimize: false,
    };
  }
  return config;
};