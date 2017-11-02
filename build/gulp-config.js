'use strict';

var releaseOutput = './dist/server/';
var testOutput = './.test';
var allCode = './server/**/*.ts';
var testCode = './server/**/*.commit.spec.ts';
var testOutputCode = './.test/**/*.commit.spec.js';
var tsconfigFile = './server/tsconfig.json';

function swallowError(error) {
    console.log(error.toString());
    this.emit('end');
    process.exit(1);
}

module.exports = {
    release_output: releaseOutput,
    test_output: testOutput,
    all_code: allCode,
    test_code: testCode,
    transpile_source: [
        allCode,
        '!' + testCode
    ],
    transpile_tests: [
        testCode
    ],
    test_output_source_tests: testOutputCode,
    // output_test_results_commit: testOutputRoot + './results/' + 'commit-test-results.xml',
    // output_test_coverage: testOutputRoot + './coverage',
    tsconfig: tsconfigFile,
    swallowError: swallowError
};