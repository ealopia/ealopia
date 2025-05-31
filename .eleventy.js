import eleventyNavigationPlugin from "@11ty/eleventy-navigation";

export default function (eleventyConfig) {
  // Order matters!
  eleventyConfig.setInputDirectory("src");
  eleventyConfig.addWatchTarget("src");
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
}
