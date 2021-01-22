
const {
    ipcRenderer
} = require('electron');
const TabGroup = require('electron-tabs');
const tabGroup = new TabGroup({
	closeButtonText: "C",
	newTabButtonText: "N"
});

ipcRenderer.on('renderer/add-tab', (event, arg) => {
    tabGroup.addTab(arg)
});
