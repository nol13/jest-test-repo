module.exports = {
  clearMocks: true,
  collectCoverage: false,
  setupTestFrameworkScriptFile: "./jest/setup.js",
  snapshotSerializers: ["enzyme-to-json/serializer"],
  testURL: "https://example.com",
  "moduleNameMapper": {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|less|scss)$": "identity-obj-proxy"
  },
  "transform": {
    "^.+\\.jsx?$": "babel-jest"
  }
};
