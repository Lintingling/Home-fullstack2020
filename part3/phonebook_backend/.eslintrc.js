module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: "eslint:recommended",
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaVersion: 11,
  },
  rules: {
    indent: ["error", 2],
    "linebreak-style": ["error", "windows"],
    quotes: [0, "single"],
  },
};