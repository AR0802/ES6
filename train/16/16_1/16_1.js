'use strict';
var http = require("http");

var request = http.request({
    hostname: "eloquentjavascript.net",
    path: "/author",
    method: "GET",
    headers: {Accept: "application/json"} //text/plain, text/html
}, function(response) {
    console.log(response);
});
request.end();