var http = require('http');
function handleRequest (req,res){
    console.log(req);
    res.writeHead(200,{
        "Content-Type": "application/json",
    });
    res.end(JSON.stringify({error:{code:"12",message:"It's an empty website."},data:{Author:'Mark',About:'Data Sciense'}}));
}
var s = http.createServer(handleRequest);
s.listen(8080);