const {fetchData} = require("../src/srcap-util")

exports.handler = function(event, context, callback) {
  fetchData().then(response => {
    callback(null, {
      statusCode: 200,
      body: response
    });
  })
};
