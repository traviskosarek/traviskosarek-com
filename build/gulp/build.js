'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');
// var sourceMaps = require('gulp-sourcemaps');
var typescript = require('gulp-typescript');

var gulpConfig = require('./../gulp-config');

gulp.task('build', stream => {
    runSequence(
        'clean',
        'lint',
        'transpile',
        stream);
    return stream;
});

gulp.task('transpile', stream => {
    runSequence(
        'transpile-source',
        'transpile-source-commit-tests',
        stream);
    return stream;
});

gulp.task('transpile-source', function() {
    var project = typescript.createProject(gulpConfig.tsconfig);
    var tsResult = gulp.src(gulpConfig.transpile_source)
        .pipe(project())
        .on('error', gulpConfig.swallowError);

    return tsResult.js
        .pipe(gulp.dest(gulpConfig.release_output))
        .pipe(gulp.dest(gulpConfig.test_output));
});

gulp.task('transpile-source-commit-tests', function() {
    var project = typescript.createProject(gulpConfig.tsconfig);
    var tsResult = gulp.src(gulpConfig.transpile_tests)
        .pipe(project())
        .on('error', gulpConfig.swallowError);

    return tsResult.js
        .pipe(gulp.dest(gulpConfig.test_output));
});