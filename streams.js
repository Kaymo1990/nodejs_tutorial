const fs = require('fs');

const writes = fs.createWriteStream('./example2.txt');
const stream = fs.createReadStream('./example.txt', 'utf8')
stream.on('data', (chunk)=> {
writes.write(chunk);
});


