const path = require("path");

module.exports = {
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "babel-eslint",
  },
  extends: ["plugin:vue/recommended", path.join(__dirname, "index.js")],
  env: {
    browser: true,
  },
  rules: {
    "vue/html-indent": [1, 2],
    "vue/max-attributes-per-line": [1, { singleline: 2 }],
    "vue/html-closing-bracket-newline": [
      1,
      {
        singleline: "never",
        multiline: "always",
      },
    ],
    "vue/html-closing-bracket-spacing": [
      1,
      {
        startTag: "never",
        endTag: "never",
        selfClosingTag: "never",
      },
    ],
  },
};
