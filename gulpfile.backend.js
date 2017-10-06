const gulp = require('gulp');
const babel = require('gulp-babel');
const clean = require('gulp-clean');
const deleteLines = require('gulp-delete-lines');
const sourceTranspile = [
    'src/**/*', 
    '!src/**/*.scss', 
    '!src/**/*.spec.js', 
    '!src/**/*.spec.js.snap', 
    '!src/**/__snapshots__',
    '!src/**/__mocks__/*',
    '!src/**/*.ejs'
];
const sourceCopy = ['src/**/*.ejs'];
const dest = 'build/backend';

gulp.task('clean', ()=>{
    return gulp.src(dest).pipe(clean());
});

gulp.task('transpile',['clean'], () => {
    return gulp.src(sourceTranspile).
        pipe(deleteLines({ //Remove all ocurrences of scss imports
            filters: [
                /import[ ]*'.*\.[s]?css'/i
            ]
        })).
        pipe(babel({
            presets: ['env']
        })).
        pipe(gulp.dest(dest));
});

gulp.task('copy',['transpile'], () => {
    return gulp.src(sourceCopy).
        pipe(gulp.dest(dest));
});

gulp.task('default', ['copy']);


