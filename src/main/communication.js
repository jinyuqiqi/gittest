const { ipcMain } = require("electron");

module.exports = function (win){
	ipcMain.on('min', (event, res)=> {
		win.minimize()
	})

	ipcMain.on('reload', (event, res)=> {
		win.reload()
	})

	ipcMain.on('peeling', (event, res)=> {
		// event.sender.send('perform-peeling', res)
		win.webContents.send('perform-peeling', res);
	})
}





