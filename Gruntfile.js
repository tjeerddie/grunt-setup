"use strict";

module.exports = function (grunt) {
    require('load-grunt-config')(grunt, {
        configPath: require('path').join(process.cwd(), 'grunt/config')
    });
    grunt.loadTasks('grunt/tasks');
};
