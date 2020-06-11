module.exports = {
  "env": {
      "browser": true,
      "es2020": true,
      "jest": true,
  },
  "extends": [
      "plugin:react/recommended",
      "airbnb",
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
      "ecmaFeatures": {
        "jsx": true,
      },
      "ecmaVersion": 11,
      "sourceType": "module",
  },
  "plugins": [
      "react",
      "@typescript-eslint",
  ],
  "rules": {
      "import/extensions": [
        "error",
        {
          pattern: {
            "js": "never",
            "jsx": "never",
            "ts": "never",
            "tsx": "never",
          },
        },
      ],
      "react/jsx-filename-extension": ["error", { "extensions": [".jsx", ".tsx"] }],
      "no-use-before-define": ["error", "nofunc"],
      "no-param-reassign": ["error", { "props": true, "ignorePropertyModificationsForRegex": ["^registration$"] }]
  },
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
};
