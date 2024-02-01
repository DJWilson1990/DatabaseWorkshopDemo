// Setup
import Database from "better-sqlite3";
// idea behind seed file is to 'seed' our database with some initial data

// constructive functions. hook up database to get methods
const db = new Database("database.db");

// .exec executes some sql query. Have to use back ticks! `` commands generally in UPPERCASE
// inside of ()'s we put the columns we want
// if not exists: create table unless it already exists.
// PRIMARY KEY - flagging our id as a records unique identifier
// AUTOINCREMENT - telling it to start at 1, and add one to each new record after that
db.exec(`CREATE TABLE IF NOT EXISTS sports (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    sport TEXT,
    year INTEGER,
    imgURL TEXT
)`);

db.exec(`
INSERT into sports (sport, year, imgURL)
VALUES
('Skiing', 2012, 'https://www.tripsavvy.com/thmb/6F6BCH0iSZsqRu6ecalX4T8IwPM=/5306x3537/filters:fill(auto,1)/mid-adult-man-skiing-down-mountain--golden--british-columbia--canada-480984215-5b50d2f2c9e77c005b1b87be.jpg'),
('Kitesurfing', 2021, 'https://coresites-cdn-adm.imgix.net/mpora_new/wp-content/uploads/2016/03/Kitesurfing-Gear-1.jpg?fit=crop'),
('Running', 2022,'https://blogs.bmj.com/bjsm/files/2017/08/running-sunset.jpg')
`);
