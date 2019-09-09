/*
 * Homework Assignment #1 for Node Masterclass by Thinkific
 * Author:  Emppu Nurminen
 * Detail:  Returns simple welcome text in JSON form,
 *          when user selects localhost:3000/hello
 */

 // Dependencies
 const http = require('http');
 const url = require('url');

 // Defining simple HTTP server
 const httpServer = http.createServer(function(req, res){
    let parsedUrl = url.parse(req.url, true);
    let path = parsedUrl.pathname;
    res.end('Yaay it\'s working\n');
    console.log('Request recieved on path: ' + path);
 });

 // Start the server and listen port 3000
 httpServer.listen(3000, function(){
    console.log('Server is now listening on port 3000');
 });