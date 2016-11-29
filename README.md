# roadstead

A dictionary containing trusted semver ranges of core NPM packages, and manually-verified versions of 3rd party NPM packages used consistently across the Sails framework, Node Machine project, and related modules.

## Usage

```javascript
var ROADSTEAD = require('roadstead');
```

```javascript
console.log(ROADSTEAD.verifiedReleases);
// =>
//  {
//    'async': '2.0.1',
//    'lodash': '3.10.1',
//    // ...etc
//  }
```

```javascript
console.log(ROADSTEAD.trustedSemverRanges);
// =>
//  {
//    '@sailshq/lodash': '^3.10.2',
//    'include-all': '^1.0.5',
//    // ...etc
//  }
```

## Help

If you have questions or are having trouble, click [here](http://sailsjs.com/support).


## Bugs &nbsp; [![NPM version](https://badge.fury.io/js/roadstead.svg)](http://npmjs.com/package/roadstead)

To report a bug, [click here](http://sailsjs.com/bugs).


## Contributing

Please observe the guidelines and conventions laid out in the [Sails project contribution guide](http://sailsjs.com/contribute) when opening issues or submitting pull requests.

[![NPM](https://nodei.co/npm/roadstead.png?downloads=true)](http://npmjs.com/package/roadstead)

## License

The [Sails framework](http://sailsjs.com) is free and open-source under the [MIT License](http://sailsjs.com/license).

