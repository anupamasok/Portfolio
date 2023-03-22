module.exports = function (eleventyConfig) {
  // Output directory: _site

  // Copy `img/` to `_site/img`
  eleventyConfig.addPassthroughCopy("public/styles.css");
  eleventyConfig.addPassthroughCopy("public/assets");
};
