module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "parserOptions": {
    "parser": "babel-eslint"
  },
  "extends": [
    "plugin:vue/recommended",
    "plugin:vue/essential"
  ],
  // required to lint *.vue files
  "plugins": [
    "vue"
  ],
  "rules": {
    "vue/require-prop-types": [
      "off"
    ],
    "indent": [
      "error",
      2
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "never"
    ]
  }
}
