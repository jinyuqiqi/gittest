const path = require('path');
const electron = require("electron");
const remote = electron.remote;
const ipcRenderer = electron.ipcRenderer;
const BrowserWindow = electron.remote.BrowserWindow;
const parentWin = remote.getCurrentWindow();
const parentWinSize = parentWin.getSize();


let skinWin, toolWin, optionWin, memberWin, settinsWin, timerWin;

let childWindow = {
	createSkinWin(){
		if(skinWin)return
		skinWin = new BrowserWindow({
			width: 560,
			height: 440,
			frame: false,
			modal: true,
			resizable: false,
			parent: remote.getCurrentWindow()
		})
		skinWin.loadURL(`http://localhost:9080/skin.html`)
		
		skinWin.on('closed', () => { 
		    skinWin = null 
		})
		
		skinWin.setMenu(null)
	}
}

module.exports = childWindow

// DevTools was disconnected from the page. Once page is reload, DevTools will automatically reconnect

