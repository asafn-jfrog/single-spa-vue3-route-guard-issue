module.exports = {
    moduleFileExtensions: [
        'ts',
        'tsx',
        'js',
        'jsx',
        'json',
        'vue',
    ],
	setupFiles: [
		'<rootDir>/.jest/register-context.js',
		'<rootDir>/.jest/register-globals.js',
		'core-js'],
	setupTestFrameworkScriptFile: '@jfrog/ui-platform-common/.jest/custom-matchers.ts',
    transform: {
        '^.+\\.vue$': 'vue-jest',
        '.+\\.(css|styl|less|sass|scss|svg|png|jpg|gif|ttf|woff|woff2)$': 'jest-transform-stub',
        '^.+\\.(ts|js)?$': 'babel-jest',
        '^.+\\.html$': 'html-loader-jest'
    },
    transformIgnorePatterns: [
        '<rootDir>/node_modules/(?!(bootstrap-vue|jfrog-ui-essentials|lit-element|vue|vue-context|lit-html|@jfrog/ui-platform-common|@webcomponents|single-spa-vue|ag-grid-community|ag-grid-vue))',
        //NOTE: the exclusion "@webcomponents" is not working
    ],
    moduleDirectories: [
        'node_modules', '<rootDir>/node_modules'
    ],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
        '@cmp/(.*)$': '<rootDir>/src/components/$1',
        '@api/(.*)$': '<rootDir>/src/api/$1',
        '@components/(.*)$': '<rootDir>/src/components/$1',
        '@shared/(.*)$': '<rootDir>/src/shared/$1',
        '@store': '<rootDir>/src/store',
        '@store/(.*)$': '<rootDir>/src/store/$1',
        '@constants/(.*)$': '<rootDir>/src/constants/$1',
        '@types/(.*)$': '<rootDir>/src/types/$1',
        '@containers/(.*)$': '<rootDir>/src/containers/$1',
        '@views/(.*)$': '<rootDir>/src/views/$1',
        '@less/(.*)$.less': '<rootDir>/src/assets/styles/$1.less',
        '@img/(.*)$': '<rootDir>/src/assets/images/$1',
        '@font/(.*)$': '<rootDir>/src/assets/fonts/$1',
        '@service/(.*)$': '<rootDir>/src/services/$1',
        '@utils/(.*)$': '<rootDir>/src/utils/$1',
        '\\.worker.js': '<rootDir>/src/utils/__mocks__/workerMock.js',
        '\\github-markdown.css': '<rootDir>/src/utils/__mocks__/github-markdown.js',
        '\\prism(.*)\.css': '<rootDir>/src/utils/__mocks__/prism-css.js',
        "!raw-loader!.*": "jest-raw-loader",

    },
    modulePathIgnorePatterns: ['<rootDir>/.*/__mocks__'],
    snapshotSerializers: [
        'jest-serializer-vue',
    ],
    testMatch: [
        '**/*.(test|spec).(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)',
    ],
    testPathIgnorePatterns: [
        '<rootDir>/node_modules',
    ],
    coveragePathIgnorePatterns: [],
    testURL: 'http://localhost/',
    // TODO
    'collectCoverage': false,
    'collectCoverageFrom': [
        'src/**/*.{js,vue}',
        '!**/node_modules/**',
    ],
    'coverageReporters': ['text-summary', 'lcov'],
    'clearMocks': true,
    'resetModules': true,
};
