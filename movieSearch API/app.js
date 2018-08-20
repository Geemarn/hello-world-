var express = require("express"),
	request = require("request"),
	bodyParser = require("body-parser"),
	app     = express();

app.set("view engine", "ejs");
app.use(express.static("public"))

app.get("/", function(req, res){
	res.render("search-page");
});

app.get("/results", function(req, res){
	var searched = req.query.search;
	var url = "http://www.omdbapi.com/?s=" + searched + "&apikey=thewdb";
	request(url, function(error, response, body){
		if(!error && response.statusCode == 200){
			var data = JSON.parse(body);
			res.render("results", {data: data})
		}else{
			console.log("something went wrong");
			console.log(error);
		};
	});
});

app.listen(3000, "127.0.0.1", () => {
	console.log("server running");
});