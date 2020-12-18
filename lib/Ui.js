const {
    app,
    BrowserWindow
} = require('electron');
const {
    join
} = require('path');

class Subject {
    constructor() {
        this.observers = [];
    }

    addObserver(o) {
        this.observers.push(o);
    }

    notifyObservers(data) {
        this.observers.forEach(o => {
            o.update(data);
        });
    }
}

class AbstractUi extends Subject {
    constructor() {
        super();
    }
}

class Ui extends AbstractUi {

    constructor() {
        super();
        console.log(" starting ui...");
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
            that.notifyObservers('ready');
        });
    }

    createWindow() {
        const win = new BrowserWindow({
            width: 800,
            height: 600,
            icon: join(app.getAppPath(), 'assets/cipher2-icon.png'),
            webPreferences: {
                nodeIntegration: true,
                contextIsolation: false
            }
        })
        win.loadFile(join(__dirname, 'ui.html'))
    }
}

module.exports.Ui = Ui;
