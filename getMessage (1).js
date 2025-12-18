const fs = require('fs');
const path = require('path');

exports.handler = async () => {
  const dataFile = path.resolve('./messages.json');
  let messages = [];
  try {
    messages = JSON.parse(fs.readFileSync(dataFile));
  } catch(e){}

  return { statusCode: 200, body: JSON.stringify(messages) };
};