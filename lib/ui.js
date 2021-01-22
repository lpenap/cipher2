const {
    app,
    BrowserWindow,
    ipcMain
} = require("electron");
const {
    join
} = require('path');

var AbstractUi = require('./abstract-ui.js');

class Ui extends AbstractUi {
    constructor() {
        super();
        console.log(" starting ui...");
        this.win = null;
    }

    init() {
        app.on('window-all-closed', () => {
            if (process.platform !== 'darwin') {
                app.quit()
            }
        });

        var that = this;
        app.on('activate', () => {
            if (BrowserWindow.getAllWindows().length === 0) {
                that.createWindow()
            }
        });

        app.on('ready', () => {
            that.createWindow();
            that.notifyObservers('app-ready');
        });
    }

    createWindow() {
        this.win = new BrowserWindow({
            width: 800,
            height: 600,
            icon: join(app.getAppPath(), 'assets/cipher2-icon.png'),
            webPreferences: {
				nodeIntegration: true,
                contextIsolation: false,
                enableRemoteModule: false,
				webviewTag: true,
                preload: join(app.getAppPath(), "lib/preload.js")
            }
        });
        var that = this;
        this.win.loadFile(join(app.getAppPath(), 'assets/ui.html')).then(function(result) {
            that.notifyObservers('ui-ready', that);
        });
    }

    loadTabs(tabs) {
        var that = this;
        tabs.forEach((tab) => {
            that.addTab(tab);
        });
    }

	addTab(tab) {
		this.win.webContents.send('renderer/add-tab', tab);
	}
}

module.exports.Ui = Ui;
