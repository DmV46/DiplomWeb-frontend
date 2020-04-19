module.exports = {
  "extends": "airbnb-base",
  "parserOptions": {
    "ecmaVersion": 2017
  },
  "env": {
    "es6": true
  },
  "globals": {
    "document": false
  },
  "rules":{
    "no-underscore-dangle": ["error", { "allowAfterThis": true }]
  }
}
