import gulp from 'gulp';
import sass from 'gulp-sass';
import * as sassPackage from 'sass';
import uglify from 'gulp-uglify';
import imagemin from 'gulp-imagemin';


const sassCompiler = sass(sassPackage);


export function compilar() {
    return gulp.src('src/sass/**/*.scss')
        .pipe(sassCompiler().on('error', sassCompiler.logError))
        .pipe(gulp.dest('dist/css'));
}


export function comprimir() {
    return gulp.src('src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'));
}


export function comprimirScript() {
    return gulp.src('src/js/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
}


export function observando() {
    gulp.watch('src/sass/**/*.scss', compilar);
    gulp.watch('src/images/**/*', comprimir);
    gulp.watch('src/js/**/*.js', comprimirScript);
}

export default gulp.series(compilar, comprimir, comprimirScript, observando);
