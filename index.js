/**
 * Module dependencies
 */

var TRUSTED_SVRS = require('./constants/trusted-semver-ranges.type').defaultsTo;
var VERIFIED_RELEASES = require('./constants/verified-releases.type').defaultsTo;


/**
 * A constant.
 *
 * @type {Dictionary}
 *       @property {Dictionary} trustedSemverRanges
 *                 A mapping of trusted semver ranges of internally-maintained packages,
 *                 where each key is an NPM package name, and each value is a semantic
 *                 version range (or "SVR") like "^9.23.10"
 *       @property {Dictionary} verifiedReleases
 *                 A mapping of verified releases; where each key is an NPM package name,
 *                 and each value is a semantic version string like "4.2.0"
 */

module.exports = {
  trustedSemverRanges: TRUSTED_SVRS,
  verifiedReleases: VERIFIED_RELEASES
};
