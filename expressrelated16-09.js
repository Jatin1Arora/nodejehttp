
var http = require('http');

http.createServer(function (req, res) {
    res.setHeader('Content-Type', 'application/json')
    if(req.url==='/user')
    {
    res.end("{'name':'jatin'}");
    }
    else if(req.url==='/order')
    {
    	res.end("{'id':'171181126'}")
    }
    //res.end();
}).listen(3000);
// event loop single threaded parralism vs concurrency
// nodejs origin
