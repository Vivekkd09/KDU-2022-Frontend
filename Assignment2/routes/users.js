var express = require('express');
var router = express.Router();
let jsonData = require('../searchtweet.json');
let fs = require("fs");
const { route } = require('.');
// let data=JSON.parse(jsonData);
// /* GET users listing. */
fs.readFile('searchtweet.json', 'utf-8', (err, jsonString) => {
  if(err) {
    console.log(err);
  }
  else {
    try {
  data = JSON.parse(jsonString)
    } catch(err) {
      console.log('Error parsing data: ', err);
    }
  }
})
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/:tweets/searchTweets', (req, res) => {
  let username = req.params.tweets;
  res.send(data.tweets[username]);
})
module.exports = router;