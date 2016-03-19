var path = require('path');

module.exports = function (config) {
  config.set({
      // ... normal karma configuration
      browsers: [ 'Chrome' ],

      frameworks: ['mocha-debug', 'mocha', 'chai', 'sinon'],

      files: [
          'src/**/tests/*.js',
          // each file acts as entry point for the webpack configuration
      ],

      preprocessors: {
          // add webpack as preprocessor
          'src/**/tests/*.js': ['webpack']
      },

      reporters: [ 'progress' ],

      webpack: { //kind of a copy of your webpack config
        module: {
          loaders: [
            {
              test: /\.jsx?$/,
              exclude: /node_modules/,
              loader: 'babel-loader',
              query: {
                presets: ['es2015', 'react']
              }
            }
          ]
        },
        resolve: {
          extensions: ['', '.js', '.jsx'],
          root: [
            path.resolve('./src')
          ]
        }
      },

      webpackMiddleware: {
          // webpack-dev-middleware configuration
          // i. e.
          noInfo: true
      },

      singleRun: false
  });
};
