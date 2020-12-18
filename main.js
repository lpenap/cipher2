const { app, BrowserWindow } = require('electron')
const { Ui } = require('./lib/Ui.js');
const { Controller } = require('./lib/Controller.js');

const myUi = new Ui();
const myController = new Controller(myUi);
myUi.addObserver(myController);
myUi.init();
