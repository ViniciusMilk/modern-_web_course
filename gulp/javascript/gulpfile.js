const gulp = require('gulp')
const babel = require('gulp-babel')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')

const transformJS = (callback) => {
    gulp.src('src/**/*.js')
        .pipe(babel({
            comments: false,
            presets: ['env']
        }))
        .pipe(uglify())
        .pipe(concat('code.mim.js'))
        .pipe(gulp.dest('build'))
    
    return callback()
}

exports.default = gulp.series(transformJS)