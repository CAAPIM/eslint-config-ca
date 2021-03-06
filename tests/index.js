/**
 * Copyright (c) 2017 CA. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

const assert = require('assert');
const eslint = require('eslint');
const conf = require('../');

const CLIEngine = eslint.CLIEngine;

// The source files to lint.
const repoFiles = [
  'index.js',
  'tests/index.js',
];

// Use the rules defined in this repo to test against.
const cli = new CLIEngine({
  envs: ['node', 'es6'],
  useEslintrc: false,
  rules: conf.rules,
  plugins: ['react', 'import'],
});

// Runs the linter on the repo files and asserts no errors were found.
const report = cli.executeOnFiles(repoFiles);

assert.equal(report.errorCount, 0);
assert.equal(report.warningCount, 0);

repoFiles.forEach((file, index) => {
  assert(report.results[index].filePath.endsWith(file));
});
