var http = require('./http-rx')

http.createServer(8080).subscribe(function(event){
  event.response.end('ok');
});
