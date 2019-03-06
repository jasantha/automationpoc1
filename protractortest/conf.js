exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
  //specs: ['store-spec.js','product-spec.js'],
  suites: {
    smoke: ['smoke-spec.js','product-spec.js'],
    regression: ['store-spec.js','product-spec.js'],
    products:['product-spec.js','product-spec2.js'],
    stores:'store-spec.js'
  }
  };