const fs = require('fs');
const path = require('path');

const jsonsInDir = fs.readdirSync('./dnd_data').filter((file) => path.extname(file) === '.json');

const extractedData = [];
jsonsInDir.forEach((file) => {
  const fileData = fs.readFileSync(path.join('./dnd_data', file));
  const json = JSON.parse(fileData.toString());
  for (const data in json) {
    // const values = data.values();
    const item = {
      index: data['index'],
      name: data['name'],
      desc: data['desc'],
    };
  }
});

