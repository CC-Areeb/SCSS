// these are the imports we need for gulp and sass and the purgecss for removing unused css
const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const purgecss = require('gulp-purgecss')



/** 
functions to compile and run our SASS coding
src (source) to specify the SASS source file
dest will be used to speficy our output css file
*/
function buildStyles() {
    /**
     * this means that look inside the named folder and then all sub-folders
     * and compile all the sass files even if they are inside the sub-folders.
     * This will also purge(remove) any css that we have not used
     */

    return src('basics/**/*.scss')
    .pipe(sass())
    .pipe(purgecss({content: ['*.html']}))
    .pipe(dest('css'))
}

/** 
 * A watch function 
*/
function watchTask() {
    watch(['basics/**/*.scss', '*.html'], buildStyles)
}

exports.default = series(buildStyles, watchTask)