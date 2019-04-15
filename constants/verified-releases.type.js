module.exports = {
  friendlyName: 'Verified releases',
  description: 'A dictionary mapping package names of common dependencies to the version string of a verified release.',
  extendedDescription:
  'On the Sails.js team, we prefer to pin the versions of 3rd party dependencies \n'+
  'from outside of the project, just because we\'ve been burned on more than one occasion \n'+
  'by patch or minor releases breaking functionality.  But while pinning depenency versions \n'+
  'is great for maintainability, security, and stability, it does have the effect of defeating \n'+
  'a powerful, built-in download size optimization in NPM. \n'+
  '\n'+
  'So, for certain *common* dependencies, like async and lodash, we\'re moving towards \n'+
  'standardizing the pinned version number across all of our modules.  This reduces overall \n'+
  '`npm install` time, makes for a more optimized bundle when browserifying, and, in general, \n'+
  'makes packages easier to understand and troubleshoot. \n'+
  '\n'+
  'This is a dictionary of those "verified" versions for *common deps*. \n'+
  '',
  example: {},
  defaultsTo: {
    'async': '2.0.1',

    'chalk': '1.1.3',
    'prompt': '0.2.14',
    'commander': '2.8.1',

    'pg': '6.1.0',
    'mysql': '2.10.2',
    'mongo': '2.2.22',

    'request': '2.81.0',
    'fs-extra': '0.30.0',
    'knex': '0.12.7',
    'bluebird': '3.2.1',
    'debug': '2.6.9',
    'bcryptjs': '2.3.0',
    'semver': '5.4.1',
    'connect-redis': '3.1.0',

    'ejs': '2.5.5',
    'grunt': '1.0.1',
    'grunt-cli': '1.2.0',
    'grunt-contrib-clean': '1.0.0',
    'grunt-contrib-coffee': '1.0.0',
    'grunt-contrib-concat': '1.0.1',
    'grunt-contrib-copy': '1.0.0',
    'grunt-contrib-cssmin': '1.0.1',
    'grunt-contrib-jst': '1.0.0',
    'grunt-contrib-less': '1.3.0',
    'grunt-contrib-uglify': '1.0.1',
    'grunt-contrib-watch': '1.0.0',
    'grunt-hash': '0.5.0',
    'grunt-sails-linker': '0.10.1',
    'grunt-sync': '0.6.2',
    'rc': '1.0.1',

    // Dev / testing tools
    'mocha': '6.1.3',
    'eslint': '4.19.1',
    'htmlhint': '0.9.13',
    'lesshint': '4.6.4',

    // Socket.io & friends
    'socket.io': '1.5.1',
    'socket.io-redis': '2.0.0',
    'socket.io-client': '1.7.1',

    // Redis & friends
    'redis': '2.6.3',
    'ioredis': '2.4.0',

    // Older Waterline deps
    'waterline-errors': '0.10.1',
    'waterline-sequel': '0.6.4',

    // Uncommon deps used in built-in Waterline modules:
    'chai': '3.5.0',
    'jpath': '0.0.20',
    'should': '9.0.0',

    // This is not a complete list.
    // (FUTURE: add to this list over time)
  }
};
