var gulp = require('gulp');
var print = require('gulp-print');
var gulpTsConfig = require('gulp-tsconfig');

var lazypipe = require('lazypipe');

gulp.task('default', function() {
    var tsConfig = gulpTsConfig({
        tsOrder: [
            '**/app.module.ts', 
            '**/*.module.ts', 
            '**/*.ts'],
        tsConfig: {            
            "compilerOptions": {
                "target": "ES3",
                "removeComments": true,
                "sourceMap": true,
                "noImplicitAny": true,
                "out": "./dist/app.js"
            }
        }
    });

    return gulp.src(["./**/*.ts"])
        .pipe(tsConfig())
        .pipe(gulp.dest('.'));
});