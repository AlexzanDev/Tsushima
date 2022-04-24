// Gulp requirements.
var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var browserSync = require('browser-sync').create();

// Convert SCSS to CSS.
function scssTask() {
    return gulp.src('app/assets/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/assets/css'));
}

// Init Browser Sync.
function browserSyncServe(cb) {
    browserSync.init({
        server: {
            baseDir: 'app'
        },
    });
    cb();
}

// Reload the page with Browser Sync.
function browserSyncReload(cb) {
    browserSync.reload();
    cb();
}

// Watch for changes.
function watchTask() {
    gulp.watch('app/*.html', browserSyncReload); 
    gulp.watch(['app/assets/scss/**/*.scss'], gulp.series(scssTask, browserSyncReload));
}

// Tasks to execute on "gulp" or "npm run dev" commands.
exports.default = gulp.series(
    scssTask,
    browserSyncServe,
    browserSyncReload,
    watchTask
);
