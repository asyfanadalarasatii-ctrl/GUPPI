const fs = require('fs');
const path = require('path');

exports.handler = async (event) => {
  const dataFile = path.resolve('./messages.json');
  const { kode, balasan } = JSON.parse(event.body);

  let messages = [];
  try {
    messages = JSON.parse(fs.readFileSync(dataFile));
  } catch(e){}

  messages = messages.map(m => m.kode === kode ? {...m, balasan} : m);

  fs.writeFileSync(dataFile, JSON.stringify(messages, null, 2));

  return { statusCode: 200, body: JSON.stringify({ok:true}) };
};
