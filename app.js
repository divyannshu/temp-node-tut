// const number=9;
// if(number>10)
//     console.log('Large number');

// else
// console.log('Small number');
// console.log('Hey this is my first code');

// console.log(__dirname);
// setInterval(()=>{
// console.log('Hello world');
// },1000);
// const names=require('./names')
// const sayHi=require('./utils')
// require('./mind-grenade')
// console.log(names);
// console.log(sayHi);
// sayHi('susan')
// sayHi(names.john)
// sayHi(names.peter)


// const os=require('os')
// //info about user
// const user=os.userInfo()
// console.log(user);

// //method returns the system uptime in seconds
// console.log(`the system uptime is ${os.uptime()} seconds`);

// const currentOS={
//     name:os.type(),
//     release:os.release(),
//     totalMem:os.totalmem(),
//     freeMem:os.freemem(),
// }
// console.log(currentOS);
/***************************** */
// const path=require('path')
// console.log(path.sep);
// const filepath=path.join('\content','text.txt')
// console.log(filepath);
// const base=path.basename(filepath)
// console.log(base);

// const absolute=path.resolve(__dirname,'content','text.txt')
// console.log(absolute);
/****************************** */
// const {readFileSync,writeFileSync}=require('fs')
// const first=readFileSync('./content/first.txt','utf8')
// console.log(first);
// writeFileSync('./content/result.txt',`Here is the result:${first}`,{flag:'a'})
/*************************************** */
// const {readFile,writeFile}=require('fs')
// readFile('./content/first.txt','utf8',(err,result)=>{
//     if(err){
//         console.log(err);
//         return
//     }
//     const first=result;
//     readFile('./content/second.txt','utf8',(err,result)=>{
//     if(err){
//         console.log(err);
//         return
//     }
//     const second=result
//     writeFile(
//         `./content/result-async.txt`,
//         `Here is the result:${first},${second}`,(err,result)=>{
//             if(err){
//                 console.log(err);
//                 return
//             }
//             console.log(result);
//         }
//     )
// })
// })
/************************************** */
// const http=require('http')
// const server=http.createServer((req,res)=>{
//     if(req.url==='/')
//       res.end('Welcome to our home page')
//     if(req.url==='/about')
//     res.end(`Here is our short history`)
//     res.end(`<h1>Oops<\h1>
//     <p>sWe cant seem to findthe page you arer looking for<\p>
//     <a href="/">back home</a>`)
// })
// server.listen(5000)
/************************************* */
const _=require('lodash')
const items=[1,[2,[3,[4,[5]]]]]
const newitems=_.flattenDeep(items)
console.log(newitems);
