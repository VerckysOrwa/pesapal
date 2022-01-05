
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bcrypt = require("bcrypt");
const port = 3001;

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  database: "problemonedb",
  password: "rootpassword",
  user: "root",
});

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const encryptedPassword = await bcrypt.hash(password,12);
  console.log(username, "\n", encryptedPassword);
  db.query(
    "INSERT INTO userdetails(user_name,user_password) VALUES(?,?)",
    [username, encryptedPassword],
    (err) => {
      if (err) {
        console.log(err);
      } else {
        res.send({ message: "sign-up successfull 😀" });
      }
    }
  );
});

app.get("/", (res, req) => {
  db.query("SELECT * FROM userdetails", (err, result) => {
    if (err) {
      console.log(err);
      throw err;
    } else {
      req.json(result);
    }
  });
});

app.listen(port, (err) => {
  if (!err) console.log(`server running on port ${port}`);
  else {
    console.log(err);
    throw err;
  }
});
