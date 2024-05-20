// Understanding URL Parsing in Nodejs

//import the url module from Node.js
const url = require('url');

// Parse an URL string into its segment
const myURL = url.parse('https://localhost:3000/pathname?search=test#hash', true);

console.log(myURL);