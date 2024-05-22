const path = require('path');
const webpackConfig = require('./webback.config');

module.exports = {
    lintOnSave: false,
    runtimeCompiler: true,
    configureWebpack: webpackConfig,
    devServer: {
        disableHostCheck: true,
        contentBase: [
            path.join(__dirname, 'public'),
        ],
    },
    chainWebpack: config => {
        config.plugins.delete('prefetch');
        config.module
          .rule('svg')
          .use('file-loader')
          .loader('file-loader')
          .tap(options => Object.assign(options, { esModule: false }));
    },
};
