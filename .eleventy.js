export default function (eleventyConfig) {
  // Order matters!
  eleventyConfig.setInputDirectory("src");
  eleventyConfig.addWatchTarget("src");
  eleventyConfig.addPassthroughCopy("src/assets");
}
