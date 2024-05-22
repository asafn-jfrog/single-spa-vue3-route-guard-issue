module.exports = {
    devtool: 'eval-source-map',
    externals: ['vue', 'vue-router', 'single-spa'],
    output: {
        libraryTarget: 'umd',
    },
    resolve: {
        symlinks: false,
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules|vue\/src/,
                loader: 'ts-loader',
                options: {
                    happyPackMode: true,
                    appendTsSuffixTo: [/\.vue$/]
                }
            },
            { parser: { system: false }}
        ],
    },
    entry: {
        app: './src/main.ts'
    }
};
