var gulp = require('gulp'), // Подключаем плагин gulp
	stylus = require('gulp-stylus'), // Подключаем плагин gup-stylus для работы со stylus'ом
	concat = require('gulp-concat'), // Подключаем плагин gulp-concat, чтобы на выходе получался один файл стилей
	plumber = require('gulp-plumber'),
	errorHandler = require('gulp-plumber-error-handler'),
	notify = require('gulp-notify'),
	cssnano = require('gulp-cssnano'), // Подключаем пакет для минификации CSS
    rename	= require('gulp-rename'), // Подключаем библиотеку для переименования файлов
	sourcemaps = require('gulp-sourcemaps'), // Подключаем sourcemap
	autoprefixer = require('gulp-autoprefixer'),// Подключаем библиотеку для автоматического добавления префиксов
	server = require('gulp-server-livereload');

// Создаем задачу для Stylus
gulp.task('compile_stylus', function () {

   return gulp.src(['src/styles/style.styl']) // Подаем на вход файл style.styl
   
	    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")})) // Выводит окно ошибки

	    .pipe(sourcemaps.init())
   
	        .pipe(stylus()) // Запускаем обработчик Stylus, в потоке — style.css    
		
			.pipe(concat('style.css')) // Склеиваем все stylus файлы в style.css

			.pipe(cssnano()) // Сжимаем

			.pipe(rename({suffix: '.min'})) // Добавляем суффикс .min
	   
	   		.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true })) 

   		.pipe(sourcemaps.write('./'))

        .pipe(gulp.dest('dist/styles/')); // Копируем файл style.css в папку dist/styles/    
});

// Создаем задачу, которая склеивает все скрипты в один файл
gulp.task('scripts', function() {
  return gulp.src('src/scripts/*.js')
    .pipe(concat('script.js'))
    .pipe(gulp.dest('dist/scripts/'));
});

// Создаем задачу watch, которая следит за измненеиями файлов с расширением .styl
gulp.task('watch', function () {
    gulp.watch('src/scripts/*.js', ['scripts']);
    gulp.watch('src/styles/blocks/*.styl', ['compile_stylus']);
});

// Создаем задачу для livereload
gulp.task('serv', function() {
  gulp.src('./')
    .pipe(server({
      fallback: 'index.html',
	  open: true
    }));
});

// Создаем задачу default для автоматического просмотра изменений и их компиляции
gulp.task('default', ['compile_stylus', 'scripts', 'watch']);