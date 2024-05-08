#!/usr/bin/node

const fs = require('fs');
const request = require('request');
const url = process.argv[2];
const filePath = process.argv[3];

request(url, (error, response, body) => {
  if (error) {
    console.error(error);
  }

  try {
    const content = fs.writeFile(filePath, body);
    console.log(content);
  } catch (error) {
    console.error(error);
  }
});