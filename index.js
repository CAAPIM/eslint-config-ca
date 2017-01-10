/**
 * Copyright (c) 2017 CA. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

module.exports = {
  extends: [
    'airbnb'
  ],
  rules: {
    'react/require-extension': 0,
    'react/jsx-filename-extension': [2, {
      extensions: ['.js', '.jsx']
    }],
    'import/no-extraneous-dependencies': 0,
    'import/no-named-as-default': 1,
    'import/no-named-as-default-member': 0,
    'generator-star-spacing': 0,
    'no-plusplus': 0,
    'no-bitwise': 0,
    'arrow-parens': 0,
    'react/no-unused-prop-types': 0,
    'react/forbid-prop-types': 0,
    'react/no-danger': 0,
    'react/style-prop-object': 0,
    'react/prefer-stateless-function': 0,
    'class-methods-use-this': 0
  }
};
