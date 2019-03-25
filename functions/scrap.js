const {fetchData} = require("../../src/scrap-util")

exports.handler = function(event, context, callback) {
  fetchData().then(response => {
    callback(null, {
      statusCode: 200,
      body: response
    });
  })
};
