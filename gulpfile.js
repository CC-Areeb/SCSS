// these are the imports we need for gulp and sass
const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))



/** 
functions to compile and run our SASS coding
src (source) to specify the SASS source file
dest will be used to speficy our output css file
*/
function buildStyles() {
    /**
     * this means that look inside the named folder and then all sub-folders
     * and compile all the sass files even if they are inside the sub-folders
     */

    return src('basics/**/*.scss')
    .pipe(sass())
    .pipe(dest('css'))
}

/** 
 * A watch function 
*/
function watchTask() {
    watch(['basics/**/*.scss'], buildStyles)
}

exports.default = series(buildStyles, watchTask)