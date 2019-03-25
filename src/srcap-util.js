const rp = require("request-promise");
const $ = require("cheerio");
const url = "https://www.asxenergy.com.au/";

rp(url).then(html => {
  console.log($('#home-prices', html));
});
