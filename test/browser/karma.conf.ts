/* Karma configuration for standalone build */

import puppeteer from 'puppeteer';
import webpack from 'webpack';

process.env.CHROME_BIN = puppeteer.executablePath();

module.exports = function (config) {
  config.set({
    browserConsoleLogOptions: {
      level: 'debug',
    },
    autoWatch: false,
    basePath: '..',
    browsers: ['HeadlessChrome'],
    customLaunchers: {
      HeadlessChrome: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox', '--disable-web-security'],
      },
    },
    reporters: ['mocha','coverage-istanbul'],
    singleRun: true,
    client: {
      mocha: {
        reporter: 'html',
        timeout: 5000,
        ui: 'bdd',
      },
    },
    files: [
      {pattern: '../test/test-loaders-browser.ts', watched: false},
      {pattern: '../test/test-general.ts', watched: false},
      {pattern: './browser/*.json', watched: false, included: false},
    ],
    frameworks: ['webpack', 'mocha'],
    plugins: [
      'karma-chrome-launcher',
      'karma-coverage-istanbul-reporter',
      'karma-source-map-support',
      'karma-mocha',
      'karma-mocha-reporter',
      'karma-typescript',
      'karma-webpack',
    ],
        coverageIstanbulReporter: {
            reports: ['lcov'],
            dir: '.coverage/karma',
            fixWebpackSourcePaths: true,
            'report-config': {
                html: {outdir: 'html'},
            },
            thresholds: {
              global: {
                statements: 80,
                lines: 80,
              },
            }
        },
    preprocessors: {
      '../test/test-loaders-browser.ts': ['webpack'],
      '../test/test-general.ts': ['webpack'],
    },
    webpack: {
      module: {
        rules: [
          {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
          },
          {
              test: /\.ts$/,
              exclude: /test/,
              enforce: 'post',
              use: {
                  loader: 'istanbul-instrumenter-loader',
                  options: {esModules: true},
              },
          }
        ],
      },
      plugins: [
        new webpack.ProvidePlugin({
               process: 'process/browser',
        }),
    ],
      resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
          './loaders/file': './loaders/file-browser',
          'process': 'process/browser'
        },
        fallback: {'path': false, 'os': false}
      }
    },
    webpackMiddleware: {
      stats: 'errors-details',
    },
  });
};
