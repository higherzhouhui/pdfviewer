
var liveServer = require("live-server");
var params = {
     port: 8282,
     host: "localhost",
     open: true,
     file: "index.html", 
     wait: 1000,
     logLevel: 2,  
 };
 liveServer.start(params);