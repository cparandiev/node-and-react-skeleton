const merge = require('webpack-merge');
const webpackConfig = require('./webpack.config');
const {DEV_SERVER_PORT, PROD_SERVER_PORT} = require('./server/constants').SERVER;

module.exports = merge({
    devtool: 'source-map',
    devServer: {
        port: DEV_SERVER_PORT,
        proxy: [{
            context: ['/'],
            target: `http://localhost:${PROD_SERVER_PORT}`,
        }],
    }
}, webpackConfig);