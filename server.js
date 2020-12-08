var express = require("express");   
var exphbs = require("express-handlebars");    
var bodyParser = require("body-parser");                            

var routes = require("./controllers/burgers_controller.js");      

var app = express();                                           
var PORT = process.env.PORT || 2377;                              

app.use(express.static("public"));                                
app.use(bodyParser.json());                                         
app.use(bodyParser.urlencoded({ extended: true }));                 

//handlebars references
app.engine("handlebars", exphbs({                                 
    defaultLayout: "main"                                        
}));

app.set("view engine", "handlebars");                               

app.use(routes);                                                 

app.listen(PORT, function(){                             
console.log("Listening on Port: " + PORT);
});