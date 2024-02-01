//setup
import express from "express";
import cors from "cors";

import Database from "better-sqlite3";

const app = express();
app.use(cors());
app.use(express.json());
const db = new Database("database.db");

const PORT = "1010"; //can change port number easy this way without looking through code and changing where needed in the app.listen

//root route
app.get("/", (request, response) => {
  response.send("Hello"); //sending string back - probably use this one!
  response.json({ Hello }); //send json back
  response.status(200); //send status code back (200 means OK!).....dont need to do all 3. just different ways.
});

// setting port to listen
app.listen(PORT, () => {
  console.log(`Server on port: ${PORT}`); //needs `` to work properly
});

//All of the above to set up server side!

//getting information
app.get("/sports", (req, res) => {
  try {
    let sports = db.prepare(`SELECT * FROM sports`).all();
    // .prepare() prepares info, .all calls the info. returns the data.
    res.status(200).json(sports);
  } catch (err) {
    res.status(500).json(err);
  }
});

// query param ? eg http://localhost:1010/sports?id=1    the ?id=1 is the query for data with id=1

//TRYING to use WHERE to be more specific with what data we want
// app.get('/sports', (req, res) => {
//     try {
//         if (req.query.id) {
//             let sport = db.prepare(`SELECT * FROM sports WHERE id = ?`).all(req.query.id)
//             return
//         }
//     }
// })

// POST route to create new data entries in Database
app.post("/sports", (req, res) => {
  try {
    const sport = req.body.sport;
    const year = req.body.year;
    const imgURL = req.body.imgURL;
    // run my sql statement
    const newSport = db
      .prepare(`INSERT INTO sports (sport, year, imgURL) VALUES(?, ?, ?)`) // ??'s are replaced by the values in .run(sport, year) (enter values in body in postman)
      .run(sport, year, imgURL);
    res.status(500).json(newSport);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});
