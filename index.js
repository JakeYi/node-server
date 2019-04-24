var http = require('http')
var fs = require('fs')
var url = require('url')


http.createServer(function(req,res){
	var pathObj = url.parse(req.url,true)

	switch (pathObj.pathname) {
		case '/getWeather':
			var vet
			if(pathObj.query.city == 'beijing'){
				ret = {
					city: 'beijing',
					weather: 'sun'
				}
			}else{
				ret = {
					city: pathObj.query.city,
					weather: 'rain'
				}
			}
			res.end(JSON.stringify(ret))
			break;
		case '/sample/test.html': 
			res.end(fs.readFileSync(__dirname + '/sample/test.html'))
			break;
		default: 
			res.end(fs.readFileSync(__dirname + req.pathname))
	}
}).listen(8080)