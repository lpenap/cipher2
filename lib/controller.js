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
            case 'app-ready':
                this.goAppReady();
                break;
            case 'ui-ready':
                this.goLoadTabs(data);
                break;
        }
    }

    goAppReady() {
        console.log(' loading db...');
        db.loadDb();
    }

    goLoadTabs(ui) {
        ui.loadTabs(this.getDummyTabs());
    }

    getDummyTabs() {
        var tabs = [];
        tabs.push({
            title: '[test tab 1] Electron',
            src: 'http://electron.atom.io',
            visible: true,
            active: true
        });
        tabs.push({
            title: '[test tab 2] Google',
            src: 'https://google.com',
            visible: true
        });
        return tabs;
    }
}

module.exports.Controller = Controller;
