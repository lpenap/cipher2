const {
    app,
    BrowserWindow
} = require('electron');
const {
    join
} = require('path');

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
        console.log(" controller: new event:", event);
    }
}

module.exports.Controller = Controller;
