import withNuxt from "./.nuxt/eslint.config.mjs";
import prettierConfig from "eslint-config-prettier";

export default withNuxt({
  rules: {
    "no-console": "warn",
    "no-nested-ternary": "error",
    "no-inline-comments": "warn",
    ...prettierConfig.rules,
  },
});
