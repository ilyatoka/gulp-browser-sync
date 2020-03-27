const gulp = require("gulp");
const browserSync = require("browser-sync").create();

gulp.task("css", () => {
  return gulp
    .src("src/*.css")
    .pipe(browserSync.stream());
});

gulp.task("browser-sync", cb => {
  browserSync.init({
    server: {
      baseDir: "src"
    },
    notify: true,
    open: false
  });

  cb();
});

gulp.task("watch", cb => {
  gulp.watch("src/*.css", gulp.series("css"));
  gulp.watch("src/*.js").on("change", browserSync.reload);
  gulp.watch("src/*.html").on("change", browserSync.reload);

  cb();
});

gulp.task("default", gulp.series("browser-sync", "watch"));
