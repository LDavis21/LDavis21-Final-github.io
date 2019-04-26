let sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('./db/SqliteDB.db');

let init = function () {

    db.run("CREATE TABLE if not exists vehicle (" +
        "id INTEGER PRIMARY KEY," +
        " vehicle_name TEXT," +
        " brand TEXT," +
        " year INTEGER," +
        " doors INTEGER," +
        " seats INTEGER," +
        " speed INTEGER," +
        " fuel_type TEXT" +
        ")");
};

module.exports = {
    init: init,
    db: db
};