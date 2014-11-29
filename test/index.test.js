
'use strict';

// Modules
require('should');

// Subject
var subject = require('../lib/index.js');

describe('Module Exports', function () {

  it('should export app as function', function () {
    subject.should.have.property('app').and.be.type('function');
  });

  it('should export server as function', function () {
    subject.should.have.property('server').and.be.type('function');
  });

  it('should export tools as object', function () {
    subject.should.have.property('tools').and.be.type('object');
  });

});
