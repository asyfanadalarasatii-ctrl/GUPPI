const fs = require('fs');
const path = require('path');

exports.handler = async (event) => {
  const dataFile = path.resolve('./messages.json');
  const body = JSON.parse(event.body);

  let messages = [];
  try {
    messages = JSON.parse(fs.readFileSync(dataFile));
  } catch(e){}

  messages.push({...body, balasan:""});

  fs.writeFileSync(dataFile, JSON.stringify(messages, null,2));

  return { statusCode: 200, body: JSON.stringify({ok:true}) };
};
