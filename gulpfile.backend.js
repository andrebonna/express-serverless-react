const gulp = require('gulp');
const babel = require('gulp-babel');
const clean = require('gulp-clean');
const sourceTranspile = ['src/**/*', '!src/**/*.spec.js', '!src/**/*.spec.js.snap', '!src/**/__snapshots__', '!src/**/*.ejs'];
const sourceCopy = ['src/**/*.ejs'];
const dest = 'build/backend';

gulp.task('clean', ()=>{
    return gulp.src(dest).pipe(clean());
});

gulp.task('transpile',['clean'], () => {
    return gulp.src(sourceTranspile).
        pipe(babel({
            plugins: ['transform-react-jsx']
        })).
        pipe(gulp.dest(dest));
});

gulp.task('copy',['transpile'], () => {
    return gulp.src(sourceCopy).
        pipe(gulp.dest(dest));
});

gulp.task('default', ['copy']);


