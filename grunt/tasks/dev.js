module.exports = function (grunt) {
    grunt.registerTask('serve:dev', [
        'clean:cssmin',
        'clean:jsmin',
        'compass',
        'concat',
        'injector'
    ]);
};
