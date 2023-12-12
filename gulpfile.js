const {src, dest, watch, series} = require('gulp')
const sass = require('gulp-sass')(require('sass'))

function buildStyles(){
    return src('nanostyler/*.scss')
        .pipe(sass())
        .pipe(dest('dist/css'))
}

function watchTask(){
    watch(['nanostyler/*.scss'], buildStyles)
}


exports.default = series(buildStyles,watchTask)
