module.exports = {
  "env": {
    "test": {
      "presets": [
        ["@babel/preset-env", {
          "useBuiltIns": "false",
          "corejs": { "version": 2 },
        }],
        "@babel/preset-react"],
      "plugins": [
        ["import-directory"],
        ["@babel/plugin-proposal-decorators", { "legacy": true }],
        ["@babel/plugin-proposal-class-properties"],
        ["css-modules-transform", {
          preprocessCss: "./src/test/preprocess-css-for-jest.js",
          devMode: true,
          generateScopedName: "[name]--[local]--[hash:base64:5]",
          camelCase: true,
          extensions: [".scss"]
        }]
      ]
    }
  }
};
