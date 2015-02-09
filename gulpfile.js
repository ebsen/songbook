var browserSync = require('browser-sync');
var gulp        = require('gulp');
var debug       = require('gulp-debug');
var harp        = require('harp');


gulp.task('commands', function () {
  console.log('This project has the following commands available:\n\t- Run `gulp serve` to launch a local version of the site.\n\t- Run `gulp compile` to build a version of the website for FTP upload.');
})

gulp.task('compile', function () {
  var compiledOutput = 'www';
  // Call `harp compile` as a pre-step for deployment
  // harp.compile(projectPath [,outputPath] [, callback])
  harp.compile(__dirname, compiledOutput, function (error) {
    if (error) console.log(error);
  });
  console.log('Compiled the website into the \'' + compiledOutput + '\' directory.');
});

gulp.task('serve', function () {
  var port = 9000;
  harp.server(__dirname, { port: port }, function () {
    browserSync({
      notify: false,
      proxy: 'localhost:' + port
    });
    gulp.watch('public/**/*.less', function () {
      browserSync.reload('main.css', { stream: true });
    });
    gulp.watch('public/**/*.js', function () {
      browserSync.reload('main.js', { stream: true });
    })
    gulp.watch('public/**/*.jade', function () {
      browserSync.reload();
    });
  });
});

gulp.task('default', ['serve']);
gulp.task('server', ['serve']);
