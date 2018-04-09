/**
 * Module dependencies
 */

var assert = require('assert');
var _ = require('@sailshq/lodash');


describe('sanity check', function (){

  var rodestead;
  it('should not throw when required', function (){
    rodestead = require('../');
  });

  it('should export a dictionary', function (){
    assert(_.isObject(rodestead) && !_.isArray(rodestead) && !_.isFunction(rodestead));
  });

  it('should have `verifiedReleases`', function (){
    assert(_.isObject(rodestead.verifiedReleases) && !_.isArray(rodestead.verifiedReleases) && !_.isFunction(rodestead.verifiedReleases));
  });

  it('should have `trustedSemverRanges`', function (){
    assert(_.isObject(rodestead.trustedSemverRanges) && !_.isArray(rodestead.trustedSemverRanges) && !_.isFunction(rodestead.trustedSemverRanges));
  });

});
