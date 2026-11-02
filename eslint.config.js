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
    files: ["**/*.?([cm])[jt]s?(x)"],
    rules: {
      "unicorn/filename-case": [
        "error",
        {
          cases: { kebabCase: true, pascalCase: true },
        },
      ], // React 组件文件按仓库约定 PascalCase
    },
  },
);
