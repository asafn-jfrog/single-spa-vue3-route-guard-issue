/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const mocks = require('./mock.config.js');

const PROGRESS_BAR_PLUGIN_NAME = 'simple-progress-webpack-plugin';
const simpleProgressBarPlugin = require.resolve(PROGRESS_BAR_PLUGIN_NAME);
const isProduction = process.env.NODE_ENV === 'production';
const moduleType = process.env.MODULE_TYPE || 'umd';
const resourcesPath = path.join('dist');

module.exports = {
    publicPath: isProduction ? '/ui' : '/',
    lintOnSave: false,
    runtimeCompiler: true,
    configureWebpack: require('./webpack.config.' + moduleType),
    transpileDependencies: ['@jfrog/ui-platform-common'],
    css: {
        extract: false
    },
    outputDir: resourcesPath,
    devServer: {
        disableHostCheck: true,
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        contentBase: [
            path.join(__dirname, 'public'),
            /* The line below includes all the paths in the mock.config.js file as static paths
               This allows us to keep the mocks in the usecase */
            ...mocks.map(relativePath => path.join(__dirname, relativePath)),
        ],
        progress: isProduction, // Show default progress output only in production
    },
    chainWebpack: config => {
        config.optimization.delete('splitChunks');

        config.module
            .rule('svg')
            .use('file-loader')
            .loader('file-loader')
            .tap(options => Object.assign(options, {
                publicPath: '/ui/api/v1/access/webapp',
                esModule: false
            }));

        if (isProduction) return;
        // Replace webpack progress output with formatted output
        config.plugin(PROGRESS_BAR_PLUGIN_NAME)
            .use(simpleProgressBarPlugin, [{
                format: 'minimal',
            }]);
    },

};
