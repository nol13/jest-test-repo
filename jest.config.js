module.exports = {
  clearMocks: true,
  collectCoverage: false,
  "collectCoverageFrom": [
    "src/**/*.{js,jsx}"
  ],
  coverageDirectory: "coverage",
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "/test/"
  ],
  coverageReporters: [
    "text",
    "text-summary",
    "lcov"
  ],
  reporters: [
    "default",
    ["jest-junit", { output: "./Build/ciutests/junit.xml" }]
  ],
  setupTestFrameworkScriptFile: "./jest/setup.js",
  // jest 24:
  //setupFilesAfterEnv: ["./jest/setup.js"],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  testRegex: "./src/test/.*Test[s]{0,1}.js(?!.snap)",
  testURL: "https://example.com",
  "moduleNameMapper": {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
    //"\\.(css|less)$": "identity-obj-proxy"
  },
  "transform": {
    "^.+\\.jsx?$": "babel-jest"
  }
};
