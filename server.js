var express = require("express");

var app = express();
var PORT = 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get("/", function(req, res) {
    res.send("You are on the homepage");
});



app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
