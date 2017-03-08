module.exports = {
    options: {
        banner: '(function () { \'use strict\';',
        separator: '})(); (function () {',
        footer: '})();'
    },
    dist: {
        src: './resources/js/**/*.js',
        dest: 'public/js/app.js',
    }
};
