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
    year INTEGER
)`);

db.exec(`
INSERT into sports (sport, year)
VALUES
('Skiing', 2012),
('Kitesurfing', 2021),
('Running', 2022)
`);
