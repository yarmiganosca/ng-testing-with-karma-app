// Karma E2E configuration

module.exports = function (config) {
  config.set({
    basePath: '',

    frameworks: ['ng-scenario'],

    plugins: [
      'karma-chrome-launcher',
      'karma-jasmine',
      'karma-ng-scenario'
    ],

    files: [
      'test/e2e/*.js',
      'test/e2e/**/*.js'
    ],

    urlRoot: '/__karma/',

    proxies: {
      '/': 'http://localhost:9000/'
    },

    autoWatch: false,

    browsers: ['Chrome'],

    singleRun: true
  });
};
