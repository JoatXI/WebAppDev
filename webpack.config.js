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
    }
};