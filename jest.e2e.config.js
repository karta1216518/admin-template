module.exports = {
  // init 引用
  globalSetup: "<rootDir>/jest.e2e.setup.js",
  globalTeardown: "jest-environment-puppeteer/teardown",
  testEnvironment: "jest-environment-puppeteer",

  // 測試設定
  moduleFileExtensions: ["ts", "js", "json", "vue"],
  watchman: false,
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
    "^~/(.*)$": "<rootDir>/$1"
  },
  transform: {
    '^.+\\.ts$': 'ts-jest',
    "^.+\\.js$": "babel-jest",
    ".*\\.(vue)$": "vue-jest"
  },

  // 測試報告
  // collectCoverage: true,
  // collectCoverageFrom: [
  //   "<rootDir>/components/**/*.vue",
  //   "<rootDir>/pages/*.vue"
  // ],

  // API 時限
  testTimeout: 30000
};
