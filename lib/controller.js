const {
    app,
    BrowserWindow
} = require('electron');
const {
    join
} = require('path');

const config = require('./config.js');
const db = require('./db.js');

class Observer {
    constructor() {
        if (this.constructor == Observer) {
            throw new Error(" Object of Abstract Class cannot be created");
        }
    }
    update(data) {
		throw new Error("Abstract Method has no implementation");
	}
}

class Controller extends Observer {
    constructor(ui) {
        super();
        console.log(" starting controller...");
        this.ui = ui;
    }

    update(event, data) {
		switch (event) {
			case 'ready':
				this.goAppReady();
				break;
		}
    }

	goAppReady() {
		console.log(' loading db...');
		db.loadDb();
	}
}

module.exports.Controller = Controller;
