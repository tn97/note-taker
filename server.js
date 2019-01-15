var express = require("express");

var app = express();


var PORT = process.env.PORT || 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "notes_db"
  });
}

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});


app.get("/", function(req, res) {
  connection.query("SELECT * FROM notes;", function(err, data) {
    if (err) throw err;

    

    res.render("index", { notes: data });
  });
});


app.post("/", function(req, res) {
  console.log(req.body);
  connection.query("INSERT INTO notes (note) VALUES (?)", [req.body.note], function(err, result) {
    if (err) throw err;

    res.redirect("/");
  });
});


app.listen(PORT, function() {

  console.log("Server listening on: http://localhost:" + PORT + " hehe");
});
