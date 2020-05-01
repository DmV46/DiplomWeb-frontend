module.exports = {
  "extends": "airbnb-base",
  "parserOptions": {
    "ecmaVersion": 2017
  },
  "env": {
    "es6": true,
    "browser": true
  },
  "rules":{
    "no-underscore-dangle": ["error",
    {
      "allowAfterThis": true,
      "allowAfterSuper": true
    }],
    "no-useless-escape": "off",
    "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }]
  }
}
