const client_id = '292377082883866635';
const client_secret = 'S7zfjpuNGxstqPpRw9rA0-83EiZ2VMiw';
const token = 'MjkyMzc3MDgyODgzODY2NjM1.C63I6A.--76EVlNpvLu4xAdyrP3qjlhD3I';
let BASE_API_HOST = 'discordapp.com';
let BASE_API_PATH = '/api';

let http = require("https");

let options = {
"method": "GET",
"hostname": BASE_API_HOST,
"port": null,
"path": `${BASE_API_PATH}/gateway`
};

let req = http.request(options, function (res) {
  let chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    let body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.end();
