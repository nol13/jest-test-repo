module.exports = {
  clearMocks: true,
  collectCoverage: false,
  setupTestFrameworkScriptFile: "./jest/setup.js",
  // jest 24:
  snapshotSerializers: ["enzyme-to-json/serializer"],
  testRegex: "./src/test/.*Test[s]{0,1}.js(?!.snap)",
  testURL: "https://example.com",
  "moduleNameMapper": {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|less|scss)$": "identity-obj-proxy"
  },
  "transform": {
    "^.+\\.jsx?$": "babel-jest"
  }
};
