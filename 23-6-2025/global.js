const { error } = require('console')
const fs = require('fs')
// const people = require('./people')
// setInterval(() => {
    //     console.log('Hello')
    // }, 1000);
    // console.log(__filename)
    // console.log(__dirname)
// const {names, ages} = require('./people')
// console.log(names)
// console.log(ages)

// const os = require('os'); // this is globally object 
// console.log([os.platform(),os.version(),os.uptime(),os.userInfo().username]);


// reading the file

// fs.readFile('./docs/blog1.txt',(err,data)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log(data.toString())
// })

// writing the file 

// fs.writeFile('./docs/blog1.txt', 'hello, World',()=>{
//     console.log('file was written');
    
// })

// fs.writeFile('./docs/blog2.txt', 'hello, World',()=>{
//     console.log('file was written');
    
// })


// make directories

// fs.mkdir('./docs/assets',(err)=>{
//     if (err){
//         console.log(err);
//     }
//     console.log('Folder Created')
// })


// if(!fs.existsSync('./docs/assets')){
//     fs.mkdir('./docs/assets',(err)=>{
//     if (err){
//         console.log(err);
//     }
//     console.log('Folder Created')
// })
// }
// else {
//     fs.rmdir('./docs/assets',(err)=>{
//         if (err){
//             console.log(err)
//         }
//         console.log('Folder Deleted')
//     })
// }




// if(fs.existsSync('./docs/blog2.txt')){
//     fs.unlink('./docs/blog2.txt',(err)=>{
//     if (err){
//         console.log(err);
//     }
//     console.log('File Deleted')
// })
// }