var gulp = require("gulp");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var uglifycss = require("gulp-uglifycss");
var autoprefixer = require("gulp-autoprefixer");
const browserSync = require("browser-sync").create();
paths = {
  npm: "./node_modules",
};

function scripts(done) {
  gulp
    .src([
      paths.npm + "/jquery/dist/jquery.js",
      paths.npm + "/popper.js/dist/umd/popper.js",
      paths.npm + "/bootstrap/dist/js/bootstrap.js"
    ])
    .pipe(concat("app.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest("src/assets/js/"))
    .pipe(browserSync.stream());
  done();
}



function style(done) {
  gulp
    .src([
      paths.npm + "/bootstrap/dist/css/bootstrap.css"
    ])
    .pipe(concat("app.min.css"))
    .pipe(
      autoprefixer({
        overrideBrowserslist: ["last 2 versions"],
        cascade: false,
      })
    )
    .pipe(uglifycss())
    .pipe(gulp.dest("src/assets/css/"))
    .pipe(browserSync.stream());
  done();
}

gulp.task("browser-sync", () => {
  browserSync.init({
    port: 7000,
    ui: {
      port: 7001
    },
    server: {
      baseDir: "dist/country-commerce"  
    },
  });
});

gulp.task("scripts", scripts);
gulp.task("style", style);
gulp.task("default", gulp.series(scripts, style, "browser-sync"));
