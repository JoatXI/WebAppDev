const path = require('path');

module.exports = {
    mode: 'development',
    entry: './leaflet.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    optimization: {
        minimize: false
    },
    module: {
        rules: [
            // If it's CSS, process using CSS loaders
            { test: /\.css/i, use: ['style-loader', 'css-loader'] },
        ]
    },
};