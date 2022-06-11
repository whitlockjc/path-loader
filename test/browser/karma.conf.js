/* Karma configuration for standalone build */

'use strict';

process.env.CHROME_BIN = require('puppeteer').executablePath()

module.exports = function (config) {
  config.set({
    autoWatch: false,
    basePath: '..',
    browsers: ['HeadlessChrome'],
    customLaunchers: {
      HeadlessChrome: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox', '--disable-web-security']
      }
    },
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
      'karma-chrome-launcher',
      'karma-mocha',
      'karma-mocha-reporter',
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
