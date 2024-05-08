#!/usr/bin/node

const fs = require('fs');
const filePath = process.argv[2];
const stringy = process.argv[3];

try {
  const content = fs.writeFile(filePath, stringy);
  console.log(content);
} catch (error) {
  console.error(error);
}
