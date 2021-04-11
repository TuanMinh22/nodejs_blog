var path = require("path");
var express = require("express");
var morgan = require("morgan");
var handlebars = require("express-handlebars");
var app = express();
var port = 3000;
// css is static files
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "public/img")));
//HTTP logger
app.use(morgan("combined"));
//template engine
app.engine("hbs", handlebars({
    extname: ".hbs",
}));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resource/views"));
app.get("/", function (req, res) {
    res.render("home");
});
app.get("/news", function (req, res) {
    res.render("news");
});
app.listen(port, function () {
    console.log("Example app listening at http://localhost:" + port);
});
