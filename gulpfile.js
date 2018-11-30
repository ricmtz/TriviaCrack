const gulp = require('gulp');

const clean = require('gulp-clean');
const concat = require('gulp-concat');
const cssnano = require('gulp-cssnano');
const polyfer = require('gulp-polyfer');
const postcss = require('gulp-postcss');
const postcssPresetEnv = require('postcss-preset-env');
const htmlmin = require('gulp-htmlmin');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const gulpSequence = require('gulp-sequence');
const htmlreplace = require('gulp-html-replace');

gulp.task('clean', function () {
    return gulp.src('./public/*')
        .pipe(clean());
});

gulp.task('minify-css', function () {
    const plugins = [
        postcssPresetEnv
    ];
    gulp.src('./app/css/*.css')
        .pipe(concat('styles.css'))
        .pipe(polyfer())
        .pipe(cssnano())
        .pipe(postcss(plugins))
        .pipe(gulp.dest('./public/css'));
});

gulp.task('minify-js', function () {
    gulp.src('./app/js/**/*.js')
        .pipe(concat('index.js'))
        .pipe(babel({ presets: ['@babel/env'] }))
        .pipe(uglify())
        .pipe(gulp.dest('./public/js'));
});

gulp.task('mv-img', function () {
    gulp.src('./app/**/*.{ico,png,jpg}')
        .pipe(gulp.dest('./public/'));
});

gulp.task('minify-html', function () {
    gulp.src('./app/**/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(htmlreplace({
            css: './public/css/styles.css',
            js: './public/js/index.css',
        }, {
                resolvePaths: true,
            }))
        .pipe(gulp.dest('./public/'));
});

gulp.task('build', function () {
    gulpSequence('clean', 'minify-css', 'minify-js', 'minify-html', 'mv-img')(function (err) {
        if (err) {
            console.log('err');
        }
    });
});

gulp.task('watch', function () {
    gulp.watch('./app/css/**/*.css', ['minify-css']);
    gulp.watch('./app/js/**/*.js', ['minify-js']);
    gulp.watch('./app/**/*.html', ['minify-html']);
    gulp.watch('./app/img/*.{jpg,png}', ['minify-html']);
});
