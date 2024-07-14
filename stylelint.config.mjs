module.exports = {
  extends: [
    "stylelint-config-recommended-scss",
    "stylelint-config-recess-order",
    "stylelint-config-prettier",
  ],
  plugins: ["stylelint-prettier"],
  rules: {
    "prettier/prettier": true,
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: [
          "tailwind",
          "apply",
          "variants",
          "responsive",
          "screen",
        ],
      },
    ],
  },
};
