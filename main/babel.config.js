module.exports = {
    presets: [
        ['@vue/app', {
            useBuiltIns: 'entry',
            corejs: 3
        }],
        [
            '@babel/preset-env',
            {
                targets: {
                    node: 'current'
                }
            }
        ],
        '@babel/preset-typescript'
    ],
    env: {
        production: {
            plugins: [
                '@babel/plugin-proposal-nullish-coalescing-operator',
                '@babel/plugin-proposal-optional-chaining',
                ['transform-remove-console', { exclude: ['error']}]
            ]
        },
        development: {
            plugins: [
                '@babel/plugin-proposal-nullish-coalescing-operator',
                '@babel/plugin-proposal-optional-chaining',
            ]
        },
        test: {
            plugins: [
                '@babel/plugin-proposal-nullish-coalescing-operator',
                '@babel/plugin-proposal-optional-chaining',
                'require-context-hook'
            ]
        }
    }
};
