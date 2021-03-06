# eslint-config-ca

[![Greenkeeper badge](https://badges.greenkeeper.io/CAAPIM/eslint-config-ca.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/CAAPIM/eslint-config-ca.svg?branch=master)](https://travis-ci.org/CAAPIM/eslint-config-ca)
[![dependencies](https://david-dm.org/CAAPIM/eslint-config-ca.svg)](https://david-dm.org/CAAPIM/eslint-config-ca)
[![devDependency Status](https://david-dm.org/CAAPIM/eslint-config-ca/dev-status.svg)](https://david-dm.org/CAAPIM/eslint-config-ca#info=devDependencies)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

## Overview
This package provides CA's `.eslintrc` as an extensible shared config. This configuration is intended to be used in all CA React components and applications.

## Installation
```
$ npm install --save-dev eslint eslint-config-ca
```

## Usage
Once the `eslint-config-ca` package is installed, you can use it by specifying `ca` in the [`extends`](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) section of your [ESLint configuration](http://eslint.org/docs/user-guide/configuring).

```js
{
  "extends": "ca",
  "rules": {
    // Additional, per-project rules...
  }
}
```

## How Can You Contribute
Your contributions are welcome and much appreciated. To learn more, see the [Contribution Guidelines](https://github.com/CAAPIM/eslint-config-ca/blob/master/CONTRIBUTING.md).

This project supports `commitizen`. You can use `npm run commit` to run the local instance of `commitizen` or `git cz` if you have it installed globally.

Alternatively, if you are simply using `git commit`, you must follow this format:
`git commit -m "<type>: <subject>"`

## License
Copyright (c) 2017 CA. All rights reserved.
This software may be modified and distributed under the terms of the MIT license. To learn more, see the [License](https://github.com/CAAPIM/eslint-config-ca/blob/master/LICENSE.md).
