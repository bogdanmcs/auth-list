const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const mysql = require('mysql')
const cors = require('cors');

const db = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "admin",
    database: "authlist",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}))

app.get("/api/get/", (req, res) => {
    const sqlSelect = "SELECT username FROM users";
    db.query(sqlSelect, (err, result) => {
        res.send(result); 
    })
});

app.post("/api/login", (req, res) => {
    const username = req.body.username
    const password = req.body.password

    const sqlInsert = "SELECT * FROM users WHERE username = ? AND password = ?";
    db.query(sqlInsert, [username, password], (err, result) => {
        console.log(result);

        if(result && result.length > 0) {
            console.log(`${result[0].username} just logged in!`);
            res.send(result[0].username);
        } else {
            res.send("error_badCreds");
        }
    })
});

app.post("/api/register", (req, res) => {
    const username = req.body.username
    const password = req.body.password

    const sqlInsert = "SELECT * FROM users WHERE username = ? AND password = ?";
    db.query(sqlInsert, [username, password], (err, result) => {
        if(result && result.length > 0) {
            console.log("username already exists");
            res.send("userE");
        } else {
            const sqlInsert2 = "INSERT INTO users (username, password) VALUES (?, ?)";
            db.query(sqlInsert2, [username, password], (err, result) => {
                if(result){
                    console.log('user registered succesfully');
                    res.send(result);
                } else {
                    console.log(`error: cannot insert (${username}, ${password}) into users`);
                    res.send("error_z1");
                }
            })
        }
    })
});

// db.connect((err) => {
//     if(!err) {
//         console.log("Connected to db!");
//     } else {
//         console.log("Connection failed!");
//     }
// })

app.listen(3001, () => {
    console.log("running on port 3001");
});