/*
 * Homework Assignment #1 for Node Masterclass by Thinkific
 * Author:  Emppu Nurminen
 * Date:    9th of September, 2019
 * Detail:  Returns simple welcome text in JSON form,
 *          when user selects localhost:3000/hello
 */

 // Dependencies
 const http = require('http');
 const url = require('url');

 // Defining simple HTTP server
 const httpServer = http.createServer(function(req, res){

    //Geting the URL object
    let parsedUrl = url.parse(req.url, true);

    //Geting the path
    let path = parsedUrl.pathname;

    //Geting trimmed path
    let trimmedPath = path.replace(/^\/+|\/+$/g, '');

    // Choosing requested handler
    // If not found, using notFound
    let chosenHandler = typeof(router[trimmedPath]) !== 'undefined' ? router[trimmedPath] : handlers.notFound;
   
    // Routing the request to the handgler spefied in the router
    chosenHandler(function(statusCode, payload){
       //Setting the content type for JSON
       res.setHeader('Content-Type', 'application/json');
       
       //Setting the statuscode for header
       res.writeHead(statusCode);

       //Setting the content to be recognized as JSON
       res.end(JSON.stringify(payload));
    });

    //Sending the respond
    res.end('Yaay it\'s working\n');

    //Logging the recieved path
    console.log('Request recieved on path: ' + path);
 });

 // Starting the server and listen port 3000
 httpServer.listen(3000, function(){
    console.log('Server is now listening on port 3000');
 });

 //Defining handlers
 const handlers = {};
 
 //Hello handler
 handlers.hello = function(callback){
   callback(200, {'Hello' : 'world!'})
 };

 //Not defined handler
 handlers.notFound = function(callback){
    callback(404, {'Not' : 'Found'})
 }

//Defining router
const router = {
   'hello' : handlers.hello
}