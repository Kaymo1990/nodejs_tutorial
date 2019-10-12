const fs = require('fs');
// fs.writeFile('example.txt', "this is an example", (err) => {if(err)
// // {console.log(err);}
// // else{
// // console.log('file created');
// // fs.readFile('example.txt', 'utf8', (err, file) => {
// // if (err) {
// //     console.log(err);
// // }
// // else {
// //     console.log(file);
// // }
// // })
// // }})

// fs.rename('example.txt', 'newfile.txt', (err) => {if (err) {
//     console.log(err);}
// else {
// console.log('renamed!');
// }
// })

// fs.appendFile('newfile.txt', 'here is some info', (err)=> {
// if(err) {
//     console.log(err);

// }
// else {
//         console.log("data added");
// }
// })

fs.unlink('newfile.txt', (err)=> {if(err) {
    console.log(err);}
    else {
        console.log('deleted file');
    }
});