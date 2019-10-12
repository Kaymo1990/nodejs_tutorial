const fs = require('fs');
fs.writeFile('example.txt', "this is an example", (error) => {if(error)
{console.log(error);}
else{
console.log('file created');
}})