/* Karma configuration for standalone build */

'use strict';

module.exports = function (config) {
  console.log();
  console.log('Browser Tests');
  console.log();

  config.set({
    autoWatch: false,
    basePath: '..',
    browsers: ['PhantomJS'],
    reporters: ['mocha'],
    singleRun: true,
    client: {
      mocha: {
        reporter: 'html',
        timeout: 5000,
        ui: 'bdd'
      }
    },
    files: [
      {pattern: 'test-general.js', watched: false},
      {pattern: 'test-loaders-browser.js', watched: false},
      {pattern: 'browser/*.json', watched: false, included: false}
    ],
    frameworks: ['mocha'],
    plugins: [
      'karma-mocha',
      'karma-mocha-reporter',
      'karma-phantomjs-launcher',
      'karma-webpack'
    ],
    preprocessors: {
      'test-general.js': ['webpack'],
      'test-loaders-browser.js': ['webpack']
    },
    webpack: {
      mode: 'development',
      module: {
        rules: [
          {
            test: /\.js$/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['es2015']
              }
            }
          }
        ]
      },
    },
    webpackMiddleware: {
      stats: 'errors-only'
    }
  });
};
