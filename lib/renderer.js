
const {
    ipcRenderer
} = require('electron');
const TabGroup = require('electron-tabs');
const tabGroup = new TabGroup({
	tabClass: "etabs-tab",
	viewClass: "etabs-view",
	closeButtonText: "&#10006;",
	newTabButtonText: "&#65291;",
	newTab: {
		title: "New Document"

	}
});

ipcRenderer.on('renderer/add-tab', (event, arg) => {
    tabGroup.addTab(arg)
});
