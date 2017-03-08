module.exports = {
    dist: {
        options: {
            sassDir: './resources/sass',
            cssDir: './public/css',
            environment: 'development',
            outputStyle: 'nested',
        },
        tasks: ['cssmin'],
    }
};
