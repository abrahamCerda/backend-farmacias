/* this is equivalent to a Es5 class */
const HtmlParser = {
    extractTagValues: (htmlString) => {
      return htmlString.match(/(?<=>)([\w\sñÑ-]+)(?=<\/)/g);
    },
}

module.exports = HtmlParser;