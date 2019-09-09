/*
 * Homework Assignment #1 for Node Masterclass by Thinkific
 * Author:  Emppu Nurminen
 * Detail:  Returns simple welcome text in JSON form,
 *          when user selects localhost:3000/hello
 */

 // Dependencies
 const http = require('http');

 // Defining simple HTTP server
 const httpServer = http.createServer(function(req, res){
    res.end('Yaay it\'s working\n');
 });

 // Start the server and listen port 3000
 httpServer.listen(3000, function(){
    console.log('Server is now listening on port 3000');
 });

