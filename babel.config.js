module.exports = {
  "env": {
    "test": {
      "presets": [
        ["@babel/preset-env", {
          "useBuiltIns": "false",
          "corejs": { "version": 2 },
        }],
        "@babel/preset-react"],
      "plugins": []
    }
  }
};
