const rp = require("request-promise");
const $ = require("cheerio");
const url = "https://www.asxenergy.com.au/";

export const fetchData = () => {
  return rp(url).then(html => {
    const table = $("#home-prices", html);
    const headers = [];
    const content = [[],[],[],[]];
    table.find("thead td").each((i, el) => {
      headers.push($(el).text() || "year");
    });
    table.find("tbody tr").each((i, el) => {
      el.children.forEach(td => {
        const text = $(td).text().trim()
        console.log(text);
        if(text) content[i].push(text);
      })
      return {headers, content}
    });
  });
} 
