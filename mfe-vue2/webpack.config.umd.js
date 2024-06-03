const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const mocks = require('./mock.config.js');

const isProduction = process.env.NODE_ENV === 'production';

function resolve(dir) {
    return path.join(__dirname, dir);
}

/* This method returns specific plugins depending on the build mode */
function getModeSpecificPlugins() {
    const listOfPlugins = [];
    // For non-production builds
    if (!isProduction) {
        // copy the mocks into the dist folder
        listOfPlugins.push(new CopyWebpackPlugin(
          mocks.map(relativePath => ({
              from: relativePath
          }))
        ));
    }
    return listOfPlugins;
}

module.exports = {
    devtool: 'eval-source-map',
    externals: [],
    output: {
        libraryTarget: 'umd',
        filename: '[name].umd.js',
    },
    resolve: {
        symlinks: false,
        alias: {
            'vue$': path.resolve(__dirname, 'node_modules/vue/dist/vue.js'),
            '@': resolve('src'),
            '@store': resolve('src/store'),
            '@cmp': resolve('src/components'),
            '@api': resolve('src/api'),
            '@components': resolve('src/components'),
            '@shared': resolve('src/shared'),
            '@types': resolve('src/types'),
            '@containers': resolve('src/containers'),
            '@constants': resolve('src/constants'),
            '@views': resolve('src/views'),
            '@less': resolve('src/assets/styles'),
            '@img': resolve('src/assets/images'),
            '@font': resolve('src/assets/fonts'),
            '@service': resolve('src/services'),
            '@utils': resolve('src/utils'),
        }
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            minimize: true
                        }
                    }
                ]
            },
            {
                test: /\.ts$/,
                exclude: /node_modules|vue\/src/,
                loader: 'ts-loader',
                options: {
                    happyPackMode: true,
                    appendTsSuffixTo: [/\.vue$/]
                }
            },
        ],
    },
    entry: {
        app: './src/main.ts',
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
        new webpack.DefinePlugin({
            _PRODUCTION_: isProduction,
            _IS_SYSTEM_: process.env.MODULE_TYPE === 'system'
        }),
        new webpack.IgnorePlugin({
            checkResource (resource) {
                // do something with resource
                return resource.includes('__mocks__');
            }
        }),
        new webpack.WatchIgnorePlugin([
            /\.d\.ts$/
        ]),
        new ForkTsCheckerWebpackPlugin({
            typescript: {
                diagnosticOptions: {
                    semantic: true,
                    syntactic: true,
                },
            },
        }),
        ...getModeSpecificPlugins()
    ]
};
