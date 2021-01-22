
const {
    ipcRenderer
} = require('electron');
const TabGroup = require('electron-tabs');
const tabGroup = new TabGroup();

ipcRenderer.on('add-tab', (event, arg) => {
    tabGroup.addTab(arg)
});
