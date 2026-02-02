// const http = require('http');

// const server = http.createServer((req,res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type','text/plain');
//     res.end('Hello World\n');
// });

// server.listen(3000, '127.0.0.1', () =>{
//     console.log('Server running at http://127.0.0.1:3000/');
// });

// //require module express
// const express = require('express');
// //create instance express
// const app = express();
// //fix port for router
// const port = 3000;
// //create road route for get to main page
// app.get('/', (req,res) => {
//     res.send('Hello World!');
// });
// //fix server for get comand porting
// app.listen(port,() => {
//     console.log(`Server is running on http://localhost:${port}`);
// });

// //EX1
// const math = require('./operation');
// console.log(math('add',4,5));
// console.log(math('subtract',10,3));
// console.log(math('multiply',5,6));
// console.log(math('divide',8,2));