# eslint-config-ca
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

This module is intended to be used in all CA React components and applications


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


## Contributing

This project supports `commitizen`. You can use `npm run commit` to run the local instance of `commitizen` or `git cz` if you have it installed globally.

Alternatively, if you are simply using `git commit`, you must follow this format:
`git commit -m "<type>: <subject>"`
