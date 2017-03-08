module.exports = {
    options: {
        template: './public/index.html',
        addRootSlash: false,
        ignorePath: 'public/'
    },
    local_dependencies: {
        files: {
            './public/index.html': ['public/js/**/*.js', 'public/css/**/*.css'
                                    ,'public/js/**/*.min.js', 'public/css/**/*.min.css'],
        }
    }
};
