import ejsPlugin from "@11ty/eleventy-plugin-ejs";

export default function (eleventyConfig) {
  // Order matters!
  eleventyConfig.setInputDirectory("src");
  eleventyConfig.addWatchTarget("src");
  eleventyConfig.addPlugin(ejsPlugin);
  eleventyConfig.addPassthroughCopy("src/assets");
}
