/**
 * Constructing URLs with 
 * URL Module
 */

//Import the url Moduel from Node.js
const url = require('url');

// Define the URL components
const urlObject = {
  protocol: 'http',
  hostname: 'localhost',
  port: 3000,
  pathname: '/pathname',
  query: {search: 'test'},
  hash: '#hash'
}

// construct the URL
const myURL = url.format(urlObject);

console.log(myURL);