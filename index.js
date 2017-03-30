/**
 * Copyright (c) 2017 CA. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

module.exports = {
  extends: ['airbnb'],
  rules: {
    // Allow both .js and .jsx to be used for files with JSX syntax
    'react/jsx-filename-extension': [2, {
      extensions: ['.js', '.jsx']
    }],

    // allow use of unary operators, ++ and --
    'no-plusplus': 0,

    // allow use of any type of paranthesys around arguments in arrow functions
    'arrow-parens': 0
  }
};
