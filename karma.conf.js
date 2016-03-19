module.exports = function (config) {
  config.set({
      // ... normal karma configuration
      browsers: [ 'Chrome' ],

      frameworks: ['mocha-debug', 'mocha', 'chai'],

      files: [
          'src/**/tests/*.js',
          // each file acts as entry point for the webpack configuration
      ],

      preprocessors: {
          // add webpack as preprocessor
          'src/**/tests/*.js': ['webpack']
      },

      reporters: [ 'progress' ],

      webpack: {
          // karma watches the test entry points
          // (you don't need to specify the entry option)
          // webpack watches dependencies

          // webpack configuration
      },

      webpackMiddleware: {
          // webpack-dev-middleware configuration
          // i. e.
          noInfo: true
      },

      singleRun: false
  });
};
