const {
    app,
    BrowserWindow
} = require('electron');
const {
    join
} = require('path');

class Observer {
    constructor() {}
    update(data) {}
}

class Controller extends Observer {
    constructor(ui) {
        super();
        console.log("starting cipher2 controller...");
        this.ui = ui;
    }

    update(data) {
        console.log("controller: data received:", data);
    }
}

module.exports.Controller = Controller;
