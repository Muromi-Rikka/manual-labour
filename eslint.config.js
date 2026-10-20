import { rentonReact } from "@renton/eslint-config-react";

export default rentonReact(
  {
    formatters: {
      jsonc: "prettier",
      markdown: "prettier",
    },
    jsonc: true,
    markdown: true,
    stylistic: {
      quotes: "double",
      semi: true,
    },
    test: true,
    typescript: true,
    yaml: true,
  },
  {
    ignores: [".superpowers/**"],
  },
  {
    rules: {
      "pnpm/yaml-enforce-settings": "off",
      "react/naming-convention-ref-name": "off",
      "unicorn/filename-case": "off",
    },
  },
);
