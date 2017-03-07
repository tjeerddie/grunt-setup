"use strict";

module.exports = (grunt) => {
    require('load-grunt-tasks')(grunt);
    //require('load-grunt-config')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            js: ['./public/js/**/*.js', '!./public/js/**/*.min.js'],
            jsmin: ['./public/js/**/*.min.js'],
            css: ['./public/css/**/*.css', '!./public/css/**/*.min.css'],
            cssmin: ['./public/css/**/*.min.css']
        },
        compass: {
            dist: {
                options: {
                    sassDir: './resources/sass',
                    cssDir: './public/css',
                    environment: 'development',
                    outputStyle: 'nested',
                },
                tasks: ['cssmin'],
            },
        },
        cssmin: {
            dist: {
                files: {
                    './public/css/<%= pkg.name %>.min.css': ['./public/css/**/*.css']
                }
            }
        },
        concat: {
            dist: {
                files: {
                    './public/js/<%= pkg.name %>.js': ['./resources/js/**/*.js',]
                }
            }
        },
        uglify: {
            dist: {
                files: {
                    './public/js/<%= pkg.name %>.min.js': ['./public/js/**/*.js']
                }
            }
        },
        injector: {
            options: {
                template: './public/index.html'
            },
            local_dependencies: {
                files: {
                    './public/index.html': ['./public/js/**/*.js', './public/css/**/*.css'
                                            ,'./public/js/**/*.min.js', './public/css/**/*.min.css'],
                }
            }
        },
        watch: {
            css: {
                files: ['./resources/sass/**/*.scss'],
                tasks: ['compass', 'clean:cssmin', 'cssmin', 'clean:css'],
            },
            js: {
                files: ['./resources/js/**/*.js'],
                tasks: ['concat', 'clean:jsmin', 'uglify', 'clean:js'],
            },
            liveReload: {
                options: {
                    livereload: true,
                },
                files: [
                    './public/',
                ]
            }
        }
    });

    grunt.registerTask('serve:dev', ['compass', 'concat', 'injector']);
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
}
