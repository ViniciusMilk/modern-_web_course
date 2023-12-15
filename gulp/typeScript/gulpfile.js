const { series, dest, src } = require("gulp")
const ts = require('gulp-typescript')
const uglify = require("gulp-uglify")
const concat = require('gulp-concat')

const tsProject = ts.createProject('tsconfig.json')

function transformTS() {
    return tsProject.src()
        .pipe(tsProject())
        .pipe(uglify())
        .pipe(dest('projectTS'))
}

exports.default = series(transformTS)