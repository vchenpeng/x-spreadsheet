module.exports = {
  "extends": "airbnb-base",
  "rules": {
    "no-param-reassign": ["error", { "props": false }],
    "class-methods-use-this": "off",
    "no-restricted-syntax": ["error", "WithStatement"],
    "quotes": ["error", "single", { "allowTemplateLiterals": true }],
    "no-console": "off",
    "no-plusplus": "off",
    "max-len": "off",
    "space-before-function-paren": ["error", {
      "anonymous": "never",
      "named": "never",
      "asyncArrow": "never"
    }]
  },
};
