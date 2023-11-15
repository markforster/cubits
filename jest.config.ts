import type { Config } from '@jest/types';
// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  reporters: [
    'default',
    [
      './node_modules/jest-html-reporter',
      {
        pageTitle: 'Cube Tests',
        outputPath: './test-reports/basic-report.html',
        includeFailureMsg: true,
      },
    ],
    [
      'jest-html-reporters',
      {
        publicPath: './test-reports/jest-html-report',
        pageTitle: 'Cube Tests',
        filename: 'report.html',
        openReport: false,
      },
    ],
    [
      'jest-stare',
      {
        resultDir: 'test-reports/jest-stare',
        reportTitle: 'jest-stare!',
        additionalResultsProcessors: ['jest-junit'],
        coverageLink: '../../coverage/lcov-report/index.html',
        jestStareConfigJson: 'jest-stare.json',
        jestGlobalConfigJson: 'globalStuff.json',
      },
    ],
  ],
};
export default config;
