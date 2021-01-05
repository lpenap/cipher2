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
            throw new Error(" Object of (Abstract) Observer Class cannot be created");
        }
    }
    update(event, data) {
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
            case 'loadTabs':
                this.goLoadTabs(data);
                break;
        }
    }

    goAppReady() {
        console.log(' loading db...');
        db.loadDb();
    }

    goLoadTabs(ui) {
        var tabs = [];
        tabs.push({
            title: 'Electron',
            src: 'http://electron.atom.io',
            visible: true
        });
        tabs.push({
            title: 'Google',
            src: 'https://google.com',
            visible: true
        });
        ui.loadTabs(tabs);
    }
}

module.exports.Controller = Controller;
