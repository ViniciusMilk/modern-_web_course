const { src, parallel, dest } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const uglify_css = require('gulp-uglifycss')
const concat = require('gulp-concat')
const html_min = require('gulp-htmlmin')

function transformSass(callback) {
    src('src/sass/index.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(uglify_css({"uglifyComments": true}))
        .pipe(concat('estilo.min.css'))
        .pipe(dest('build/css'))

    return callback() 
}

function copy(callback) {
    src('src/index.html')
        .pipe(html_min({collapseWhitespace: true}))
        .pipe(dest('build'))

    callback()
}

exports.default = parallel(transformSass, copy)