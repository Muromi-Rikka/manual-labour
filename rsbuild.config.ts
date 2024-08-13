import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import tailwindcss from "tailwindcss";

export default defineConfig({
  plugins: [pluginReact()],
  html: {
    title: "相关高薪体力活热搜",
  },
  tools: {
    postcss: {
      postcssOptions: {
        plugins: [
          tailwindcss(),
        ],
      },
    },
  },
});
