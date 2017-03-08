module.exports = {
    css: {
        files: ['./resources/sass/**/*.scss'],
        tasks: ['compass', 'clean:cssmin', 'cssmin', 'clean:css'],
    },
    js: {
        files: ['./resources/js/**/*.js'],
        tasks: ['concat', 'clean:jsmin', 'uglify', 'clean:js'],
    }
};
