'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');
var tslint = require('gulp-tslint');

var gulpConfig = require('./../gulp-config');

gulp.task('lint', stream => {
    runSequence(
        'tslint',
        stream);
    return stream;
});

gulp.task('tslint', function() {
    var stream = gulp.src([gulpConfig.all_code])
        .pipe(tslint({
            formatter: 'prose'
        }))
        .pipe(tslint.report({
            emitError: false,
            summarizeFailureOutput: true,
            sort: true,
            bell: true
        }));
    return stream;
});