const http = require("http"); 
//create a server object: 
http 
  .createServer(function (req, res) { 
    res.write("<h1>Node server Created By MIX IT agency! ... </h1>");  
    //write a response to the client 
     
    res.end();   
    //end the response 
  }) 
  .listen(3033);  
//Server runs on localhost:8080 