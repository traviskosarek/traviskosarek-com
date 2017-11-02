'use strict';

var gulp = require('gulp');
var jasmine = require('gulp-jasmine');

var gulpConfig = require('./../gulp-config');

gulp.task('test', ['transpile'], function() {
    var stream = gulp.src(gulpConfig.test_output_source_tests)
        .pipe(jasmine());
    return stream;
});