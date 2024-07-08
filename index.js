import mysql2 from "mysql2";
import express from "express";

const connection = mysql2.createConnection({
  host: "localhost",
  database: "MySQL_Connection",
  user: "root",
  password: "",
});

const app = express();
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`SERVER : http://localhost:${PORT}`);
  connection.connect((err) => {
    if (err) throw err;
    console.log("Database Connected");
  });
});

app.use("/all", (req, res) => {
  const sql_query = `SELECT * from mysql_connect`;
  connection.query(sql_query, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});
