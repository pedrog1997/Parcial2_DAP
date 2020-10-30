var express = require("express");

var app = express();
var PORT = 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get("/", function(req, res) {
    res.send("You are on the homepage");
});

app.post("/post", function(req, res) {
    var userObj = req.body;
  
    res.json("Welcome " + userObj.user);
});

app.delete("/delete", function(req, res) {
    res.json({
        delete: true
    });
});

app.put("/put/:id", function(req, res) {
    var id = req.params.id;

    res.json("Task " + id + " has been updated.");
});



app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
