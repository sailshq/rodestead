/**
 * Module dependencies
 */

var assert = require('assert');
var _ = require('@sailshq/lodash');


describe('sanity check', function (){

  var ROADSTEAD;
  it('should not throw when required', function (){
    ROADSTEAD = require('../');
  });

  it('should export a dictionary', function (){
    assert(_.isObject(ROADSTEAD) && !_.isArray(ROADSTEAD) && !_.isFunction(ROADSTEAD));
  });

  it('should have `verifiedReleases`', function (){
    assert(_.isObject(ROADSTEAD.verifiedReleases) && !_.isArray(ROADSTEAD.verifiedReleases) && !_.isFunction(ROADSTEAD.verifiedReleases));
  });

  it('should have `trustedSemverRanges`', function (){
    assert(_.isObject(ROADSTEAD.trustedSemverRanges) && !_.isArray(ROADSTEAD.trustedSemverRanges) && !_.isFunction(ROADSTEAD.trustedSemverRanges));
  });

});
