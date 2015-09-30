var http = require("http");
var url = require("url");
var fs = require("fs");

 
http.createServer(function(request, response){
    response.writeHead(200, {"Content-Type":"text/plain"});
    var params = url.parse(request.url,true).query;

   // console.log(params);

    var a = params.num1;
    var b = params.num2;
   /* var c = params.num3;
    var d = params.num4; */

  /*  var numA = new Number(a);
    var numB = new Number(b);

    var sum = new Number(numA + numB).toFixed(0);*/
    
   // console.log(a + b );
   var c = a + " " + b + "\n";
    

    fs.appendFile('message.txt', c, function (err) {
  if (err) throw err;
  console.log("It's saved!");
  return;
  //console.log(sum);
 
}); 
   

response.write(a + " " + b);
  //  response.write(sum);
    response.end();
}).listen(10001);

