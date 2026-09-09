import { rentonReact } from "@renton/eslint-config-react";

export default rentonReact(
  {
    stylistic: {
      quotes: "double",
      semi: true,
    },
    markdown: true,
    jsonc: true,
    test: true,
    typescript: true,
    yaml: true,
    formatters: {
      markdown: "prettier",
      jsonc: "prettier",
    },
  },
  {
    ignores: [".superpowers/**"],
  },
  {
    rules: {
      "pnpm/yaml-enforce-settings": "off",
      "unicorn/filename-case": "off",
    },
  },
);
