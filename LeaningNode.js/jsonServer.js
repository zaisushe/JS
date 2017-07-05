var http = require('http');
var url = require('url');
function handleRequest (req,res){
   // console.log(req);
    req.parsed_url = url.parse(req.url,true);
    console.log(req.parsed_url.query.A);
    res.writeHead(200,{
        "Content-Type": "application/json",
    });
    res.end(JSON.stringify({error:{code:"12",message:"It's an empty website."},data:{Author:'Mark',About:'Data Sciense'}}));
}
var s = http.createServer(handleRequest);
s.listen(8080);