var gulp = require("gulp"),
    $ = require("gulp-load-plugins")();

var cfg = require("./gulp.config");

gulp.task("inject:bower", function() {
    gulp.src(cfg.index)
        .pipe($.wiredep({}))
        .pipe(gulp.dest(cfg.webroot));
});

gulp.task("inject:mystuff", function() {
    var target = gulp.src(cfg.index); 
    var sources = gulp.src([cfg.myCss, cfg.myJs], 
        {read: false},
        {relative:true});

    return target.pipe($.inject(sources))
        .pipe(gulp.dest(cfg.webroot));
});

gulp.task("inject", $.sequence("inject:mystuff", "inject:bower"));
