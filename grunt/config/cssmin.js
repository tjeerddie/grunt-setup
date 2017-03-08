module.exports = {
    target: {
        files: [{
            expand: true,
            cwd: 'public/css',
            src: ['*.css', '!*.min.css'],
            dest: 'public/css',
            ext: '.min.css'
        }]
    }
};
