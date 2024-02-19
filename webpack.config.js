const path = require('path');

module.exports = {
    mode: 'development',
    entry: './public/leaflet.js',
    output: {
        path: path.resolve(__dirname, 'public/dist'),
        filename: 'bundle.js'
    },
    optimization: {
        minimize: false
    },
    module: {
        rules: [
            // If it's CSS, process using CSS loaders
            { test: /\.css/i, use: ['style-loader', 'css-loader'] },
            {
                test:/\.png/i,
                type: 'asset/resource'
            },
        ]
    },
};