module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    "semi": ["error", "never"],
    "quotes": ["warn", "single"],
    "space-before-blocks": ["warn", { "functions": "always" }],
    "brace-style": "1tbs",
    "camelcase": "always",
    "comma-spacing": [2, { "before": false, "after": true }],
    "comma-style": [2, "last"]
  }
}
