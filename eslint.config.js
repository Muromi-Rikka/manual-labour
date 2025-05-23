import antfu from "@antfu/eslint-config";

export default antfu({
  stylistic: {
    quotes: "double",
    semi: true,
  },
  jsonc: true,
  markdown: true,
  formatters: {
    markdown: "prettier",
    jsonc: "prettier",
  },
});
