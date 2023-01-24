require("dotenv").config();
const PORT = process.env.PORT || 3000;

const path = require("path");

const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "./public/"));
app.use(express.static(path.resolve(__dirname, "./public/assets/")));

app.get("/", (req, res) => {
	res.render("index");
});

const http = require("http").createServer(app);
http.listen(PORT, console.log(`server listening on port ${PORT}`));