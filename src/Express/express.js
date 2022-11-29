// const http = require('http')
// const fs =  require('fs')
// const path = require('path')
//
// const server = http.createServer((req, res) => {
//     res.writeHead(200, {
//         'Content-Type': 'text/html'
//     })
//
//    // if(req.url === '/') {
//    //     fs.readFile(path.join(__dirname, '../../public', 'page.html'), (err,  data) => {
//    //         if (err) {
//    //             throw err
//    //         }
//    //
//    //         res.end(data)
//    //     })
//    // }
//
//     // res.end('<h1>Hello Node.js!</h1>')
//
//     let filePath = path.join(__dirname, '../../public', req.url === '/' ? 'page.html' : req.url)
//
//     fs.readFile(filePath, (err, content) => {
//         if (err) {
//             fs.readFile(path.join(__dirname, '../../public', 'error.html'), (err, data) => {
//                 if (err) {
//                     res.writeHead(500)
//                     res.end('Error')
//                 } else {
//                     res.writeHead(200, {
//                         'Content-Type': 'text/html'
//                     })
//                     res.end(data)
//                 }
//             })
//         } else {
//             res.writeHead(200, {
//                 'Content-Type': contentType
//             })
//             res.end(content)
//         }
//     })
// })
//
// //     fs.readFile(filePath, (err, content) => {
// //         if(err) {
// //             fs.readFile(path.join(__dirname, '../../public', 'error.html'), (err, data) => {
// //                 if (err) {
// //                     res.writeHead(500)
// //                     res.end('Error')
// //                 } else {
// //                     res.writeHead(200, {
// //                         'Content-Type': 'test/html'
// //                     })
// //                     res.end(data)
// //                 }
// //             })
// //         } else {
// //             res.writeHead(200, {
// //                 'Content-Type': 'test/html'
// //             })
// //             res.end(content)
// //         }
// //     })
// // });
//
// server.listen(3004, () => {
//     console.log('Server has started');
// });
//
