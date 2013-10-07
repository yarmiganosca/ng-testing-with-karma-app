module.exports = function (config) {
  config.set({
    basePath: '',

    frameworks: ['jasmine'],

    files: [
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      'app/bower_components/es5-shim/es5-shim.js',

      'app/scripts/*.js',
      'app/scripts/*.coffee',

      'app/scripts/**/*.js',
      'app/scripts/**/*.coffee',

      'test/mock/**/*.js',
      'test/mock/**/*.coffee',

      'test/spec/**/*.js',
      'test/spec/**/*.coffee',

      'app/views/*.html',
      'app/views/**/*.html'
    ],

    browsers: ['PhantomJS', 'Chrome', 'Firefox'],

    captureTimeout: 10000,

    autoWatch: true,
    singleRun: false,

    preprocessors: {
      '**/*.coffee': 'coffee',
      'app/views/**/*.html': 'ng-html2js'
    }
  });
};
