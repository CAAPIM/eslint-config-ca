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
    
    /**
     * We use Flow for our components props and we define default prop values
     * when destructing the props object in the render method of the components.
     * Example:
     *   const ComponentName = ({ test = 'data' }: Props) => { ... };
     *
     * `react/require-default-props` doesn't see these default values and throws an error.
     * Flow understands these default values and it will still throw if a possibly
     * undefined prop is passed to a function that requires a defined value.
     */
    'react/require-default-props': 0,

    // allow use of unary operators, ++ and --
    'no-plusplus': 0,

    // allow use of any type of paranthesys around arguments in arrow functions
    'arrow-parens': 0
  }
};
