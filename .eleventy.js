module.exports = function (eleventyConfig) {
  // Output directory: _site

  // Copy `img/` to `_site/img`
  eleventyConfig.addPassthroughCopy("src/css/styles.css");

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
