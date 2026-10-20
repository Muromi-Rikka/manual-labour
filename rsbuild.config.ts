import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import tailwindcss from "@tailwindcss/postcss";
import { pluginGoogleAnalytics } from "rsbuild-plugin-google-analytics";

export default defineConfig({
  html: {
    title: "相关高薪体力活热搜",
  },
  output: {
    copy: [
      { from: "./public", to: "./public" },
    ],
  },
  plugins: [
    pluginReact(),
    pluginGoogleAnalytics({ id: "G-N6QN9WSE0Y" }),
  ],
  tools: {
    postcss: {
      postcssOptions: {
        plugins: [tailwindcss],
      },
    },
  },
});
