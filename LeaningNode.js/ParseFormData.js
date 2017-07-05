//C:\Users\pxue>curl -X POST --data "fild1=234&fild2=abc" http://localhost:8080
var http = require('http');
var qs = require('querystring');
function handle_request(req,res){
    var form_data='';
    let output = "";
    req.on(
        "readable",
        ()=>{
            var d = req.read();
            if(typeof d =='string'){
                form_data +=d;
            }
            else if(typeof d == 'object' && d instanceof Buffer){
                form_data+=d.toString('utf8');
            }
        }
    );
    req.on(
        "end",
        ()=>{
           
            var obj = qs.parse(form_data);
            output = JSON.stringify(obj);
             res.writeHead(200,{
                'Content-Type':'application/json'
                 })
             res.end(output);
        }
      
    );
    
}

var s = http.createServer(handle_request);
s.listen(8080);