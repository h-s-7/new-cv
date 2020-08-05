const express = require("express");
const ejs = require("ejs");

const app = express();
app.use(express.static("public"));
app.set('view engine', 'ejs');

app.get("/projects",function(req,res){
	res.render("projects");
});

app.get("/",function(req,res){
	//res.sendFile(__dirname + "/index.html");
	res.render("home");
});

app.listen(process.env.PORT || 3000,function(){
	console.log("server started at port 3000");
	});
