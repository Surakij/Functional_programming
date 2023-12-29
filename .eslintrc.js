module.exports = {
  env: {
    browser: true,
    es2021: true,
    "jest/globals": true,
  },
  extends: ["airbnb-base", "prettier"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["jest"],
  rules: {
    "import/prefer-default-export": "off",
    "import/no-unresolved": "off",
    "max-len": ["error", { ignoreComments: true }],
    "import/extensions": "off",
    "no-unused-expressions": "off",
    "func-names": ["error", "never"],
  },
};