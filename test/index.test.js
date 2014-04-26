
'use strict';

// Modules
require('should');

// Subject
var main = require('../lib/index.js');

describe('index.js', function () {

  it('should have a key "key" with value "value"', function () {
    main.should.have.property('key').and.equal('value');
  })

});
