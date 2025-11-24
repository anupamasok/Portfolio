module.exports = function (eleventyConfig) {
  // Sort a dictionary by its values (stable), supports reverse sort. Returns an array of objects with key and value.
   eleventyConfig.addFilter("sortDictByValue", function(dict, reverse = false) {
    // convert to array
    let arr = Object.keys(dict).map((key, index) => {
      const numVal = Number(dict[key]);   // <-- convert to number
      return { 
        key,
        value: numVal,
        index
      };
    });

    // stable sort by value
    arr.sort((a, b) => {
      if (a.value === b.value) {
        return a.index - b.index; // preserve original order
      }
      return reverse 
        ? b.value - a.value       // descending
        : a.value - b.value;      // ascending
    });

    return arr;
  });

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
