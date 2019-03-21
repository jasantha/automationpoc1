// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
  directConnect: true,
  allScriptsTimeout: 11000,
  //chromeDriver: '../node_modules/protractor/node_modules/webdriver-manager/selenium/chromedriver_2.46',
  specs: [
   // './src/**/*.e2e-spec.ts',
    '../src/**/*-spec.js'
  ],
  capabilities: {
    'browserName': 'chrome',
    chromeOptions: {
      args: [ "--headless", "--disable-gpu", "--window-size=800,600" ]
  }
  },
 
  baseUrl: 'http://localhost:4200/',
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  // suites: {
  //   products:'../src/app/products/fun_test/product-spec.js',
  //   stores:'../src/app/store/fun_test/store-spec.js',
  //   regression:['../src/app/products/fun_test/product-spec.js','../src/app/store/fun_test/store-spec.js']
  // },
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.e2e.json')
    });
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  }
};