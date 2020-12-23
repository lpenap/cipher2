
var Datastore = require('nedb');
const config = require('./config.js');

var db = {};

module.exports.loadDb = function(dbFile) {
    if (dbFile === undefined || dbFile == 'current') {
        dbFile = config.getCurrentDbFile();
		config.setCurrentDbFile(dbFile);
    }
    db.current = new Datastore({
        filename: dbFile,
		autoload: true
    });
}
