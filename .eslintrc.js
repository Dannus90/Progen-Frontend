module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["import"],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    react: {
      version: "detect"
    }
  },
  env: {
    browser: true,
    amd: true,
    node: true,
    jest: true
  },
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended" // Make sure this is always the last element in the array.
  ],
  rules: {
    "prettier/prettier": ["error", {}, { usePrettierrc: true }],
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "jsx-a11y/no-onchange": 0,
    "@typescript-eslint/explicit-function-return-type": "off",
    "jsx-a11y/no-autofocus": "off",
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
        specialLink: ["hrefLeft", "hrefRight"],
        aspects: ["invalidHref", "preferButton"]
      }
    ],
    "import/no-unresolved": [2, { commonjs: true, amd: true }],
    "import/named": 2,
    "import/namespace": 2,
    "import/default": 2,
    "import/export": 2,
    "import/no-named-as-default": 0,
    "@typescript-eslint/no-explicit-any": 0
  }
};
