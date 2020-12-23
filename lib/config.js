const {
    app,
} = require('electron');
const {
    join
} = require('path');
const Store = require('electron-store');
const store = new Store();

var getDefaultDbFile = function() {
    const dbFile = join(app.getPath('userData'), 'default-db.nedb');
    return dbFile;
}

var setDefaultDbFile = function() {
	setCurrentDbFile(getDefaultDbFile);
}

var getCurrentDbFile = function() {
    var currentDb = store.get('currentDb');
    if (currentDb === undefined) {
        currentDb = getDefaultDbFile();
    }
    return currentDb;
}

var setCurrentDbFile = function(dbFile) {
	store.set('currentDb', dbFile);
}

module.exports.getDefaultDbFile = getDefaultDbFile;
module.exports.setDefaultDbFile = setDefaultDbFile;
module.exports.getCurrentDbFile = getCurrentDbFile;
module.exports.setCurrentDbFile = setCurrentDbFile;
