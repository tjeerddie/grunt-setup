module.exports = function (grunt) {
    grunt.registerTask('serve', [
        'compass',
        'clean:cssmin',
        'cssmin',
        'clean:css',
        'concat',
        'clean:jsmin',
        'uglify',
        'clean:js',
        'injector',
        'watch'
    ]);

    grunt.registerTask('default', ['serve']);
};
