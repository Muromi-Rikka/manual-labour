import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import tailwindcss from "@tailwindcss/postcss";

export default defineConfig({
  plugins: [pluginReact()],
  html: {
    title: "相关高薪体力活热搜",
  },
  output: {
    copy: [
      { from: "./public", to: "./public" },
    ],
  },
  tools: {
    postcss: {
      postcssOptions: {
        plugins: [tailwindcss],
      },
    },
  },
});
