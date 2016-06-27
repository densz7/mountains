var gulp = require('gulp'), // Подключаем плагин gulp
	stylus = require('gulp-stylus'), // Подключаем плагин gup-stylus для работы со stylus'ом
	concat = require('gulp-concat'), // Подключаем плагин gulp-concat, чтобы на выходе получался один файл стилей
	plumber = require('gulp-plumber'),
	errorHandler = require('gulp-plumber-error-handler'),
	notify = require('gulp-notify');

// Создаем задачу для Stylus
gulp.task('compile_stylus', function () {

   gulp.src(['src/styles/style.styl']) // Подаем на вход файлы с расширением .styl из папки src/styles/blocks/ 

   		.pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")})) // Выводит окно ошибки

  
        .pipe(stylus()) // Запускаем обработчик Stylus, в потоке — style.css    
	
		.pipe(concat('style.css')) // Склеиваем все stylus файлы в style.css
		
        .pipe(gulp.dest('dist/styles/')); // Копируем файл style.css в папку dist/styles/    
});

// Создаем задачу watch, которая следит за измненеиями файлов с расширением .styl
gulp.task('watch', function () {
    gulp.watch('src/styles/blocks/*.styl', ['compile_stylus']);
});

// Создаем задачу default для автоматического просмотра изменений и их компиляции
gulp.task('default', ['compile_stylus', 'watch']);