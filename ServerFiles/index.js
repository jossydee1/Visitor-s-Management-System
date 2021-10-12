const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mysql = require("mysql");

const db = mysql.createPool({
	host: "localhost",
	user: "root",
	database: "vms",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/get", (req, res) => {
	// res.send("Helllooooooo");
	const sqlSelect = "SELECT * FROM visitors";
	db.query(sqlSelect, (err, result) => {
		console.log(result);
		res.send(result);
	});
});

app.post("/api/insert", (req, res) => {
	const firstName = req.body.firstName;
	const lastName = req.body.lastName;

	const sqlInsert = "INSERT INTO visitors (firstName, lastName) VALUES (?,?)";
	db.query(sqlInsert, [firstName, lastName], (err, result) => {
		res.send(result);
		console.log(err);
	});
});

app.listen(3001, () => {
	console.log("We are on the right track 3001");
});
