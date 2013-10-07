exports.config = {
  seleniumServerJar: './selenium/selenium-server-standalone-2.35.0.jar',
  chromeDriver: './selenium/chromedriver',
  seleniumArgs: [],

  specs: [
    'test/e2e/**_spec.js'
  ],

  capabilities: {
    'browserName': 'chrome'
  },

  baseUrl: 'http://localhost:9000',

  rootElement: 'body',

  jasmineNodeOpts: {
    onComplete: null,
    isVerbose: false,
    showColors: true,
    includeStackTrace: true,
    defaultTimeoutInterval: 5000
  }
};
