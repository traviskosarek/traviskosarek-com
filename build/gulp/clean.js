'use strict';

var gulp = require('gulp');
var del = require('del');

var gulpConfig = require('./../gulp-config');

gulp.task('clean', function(cb) {
    return del([gulpConfig.release_output, gulpConfig.test_output], cb);
});