var gulp = require("gulp"),
    sass = require("gulp-sass"),
    minify = require("gulp-minify"),
    autoprefixer = require("gulp-autoprefixer"),
    jade = require("gulp-jade");
    
    
var path = {
    "html_input" : "./src/jade/*.jade",
    "html_output" : "./public/",
    
    "css_input" : "./src/sass/main.scss",
    "css_output" : "./public/css/",
    
    "js_input" : "./src/js/main.js",
    "js_output" : "./public/js/"
}
    
gulp.task("html", function() {
   return gulp.src(path.html_input)
                .pipe(jade({
                    pretty: true
                }))
           .pipe(gulp.dest(path.html_output));
});

gulp.task("css", function() {
   return gulp.src(path.css_input) 
                .pipe(sass().on('error', sass.logError))
                .pipe(autoprefixer({
                    browsers: ["ie >= 9", "last 2 versions","Firefox >= 20"],
                    cascade : true
                }))
           .pipe( gulp.dest(path.css_output));
});             

gulp.task("js", function() {
   return gulp.src(path.js_input)
                .pipe(minify({
                    ext:{
                        src:'-min.js',
                        min:'.js'
                    },
                    exclude: [],
                    ignoreFiles: []
                }))
                .pipe(gulp.dest(path.js_output));
});

gulp.task("watch", function() {
    gulp.watch("./src/**/*.jade", ["html"]);
    gulp.watch("./src/**/*.scss", ["css"]);
    gulp.watch("./src/**/*.js", ["js"]);
});

gulp.task("default", ["html","css","js","watch"]);