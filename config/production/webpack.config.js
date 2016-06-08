module.exports = {
    entry: [
        './src/index.jsx',
    ],
    output: {
        path: './bin',
        filename: 'bundle.js',
    },
    module: {
        loaders: [{
            exclude: /node_modules/,
            loader: 'babel',
        }],
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
    },
};
