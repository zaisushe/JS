//C:\Users\pxue>curl -X POST -H "Content-Type:application/json" -d '{"Filed1":234,"field2":"abc"}' http://localhost:8080

var http = require('http');

function handle_request(req,res){
    var json_data='';
    let output = "";
    req.on(
        "readable",
        ()=>{
            var d = req.read();
            if(typeof d =='string'){
                json_data +=d;
            }
            else if(typeof d == 'object' && d instanceof Buffer){
                json_data+=d.toString('utf8');
            }
        }
    );
    req.on(
        "end",
        ()=>{
           
            if(!json_data || json_data.length==0){
                output = "I don't have any JSON";
            }else{
                output = "I read JSON:"+JSON.stringify(json_data);
            }
             res.writeHead(200,{
                'Content-Type':'application/json'
                 })
             res.end(output);
        }
      
    );
    
}

var s = http.createServer(handle_request);
s.listen(8080);