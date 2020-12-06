module.exports = {
    "extends": "stylelint-config-standard",
    "plugins": [
      "stylelint-scss"
    ],
    "rules": {
      "selector-nested-pattern": "^&",
      "indentation": 2,
      "no-descending-specificity": null,
      "no-eol-whitespace": null,
      "declaration-empty-line-before": null,
      "value-keyword-case": null,
      "string-quotes": "double",
      "no-duplicate-selectors": true,
      "color-hex-case": "lower",
      "color-hex-length": "long",
      "color-no-invalid-hex": true,
      "color-named": "never",
      "property-no-unknown": true,
      "plugin/no-browser-hacks": [true, {
        "browsers": [
          "last 2 versions",
          "ie >=8"
        ]
      }],
    }
  }