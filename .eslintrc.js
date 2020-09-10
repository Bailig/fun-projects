module.exports = {
  env: {
    node: true,
    browser: true,
    jest: true,
  },
  ignorePatterns: ["**/node_modules", "**/.cache", "**/dist"],
  extends: [
    "airbnb-typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:eslint-comments/recommended",
    "plugin:jest/recommended",
    "plugin:promise/recommended",
    "plugin:unicorn/recommended",
    "plugin:monorepo/recommended",
    "plugin:react-hooks/recommended",
    "prettier",
    "prettier/react",
    "prettier/@typescript-eslint",
    "prettier/unicorn",
  ],
  plugins: [
    "@typescript-eslint",
    "eslint-comments",
    "jest",
    "promise",
    "unicorn",
    "monorepo",
  ],
  rules: {
    "import/prefer-default-export": "off",
    "import/no-default-export": "off",
    "no-use-before-define": "error",
    "@typescript-eslint/explicit-function-return-type": "error",
    "@typescript-eslint/no-use-before-define": "error",
    "@typescript-eslint/explicit-function-return-type": "off",
    "react/prop-types": "off",
    "unicorn/prevent-abbreviations": "off",
  },
  overrides: [
    {
      files: ["*.spec.tsx"],
      rules: {
        "import/no-extraneous-dependencies": "off",
      },
    },
  ],
};
