const { app, BrowserWindow } = require('electron')
const { Ui } = require('./lib/ui.js');
const { Controller } = require('./lib/controller.js');

const myUi = new Ui();
const myController = new Controller(myUi);
myUi.addObserver(myController);
myUi.init();
