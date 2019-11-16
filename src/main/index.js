const path = require("path");
const electron = require("electron");
const { app, BrowserWindow, nativeImage } = electron

const systemIcon = nativeImage.createFromPath(path.join(__dirname,'../../', 'build/icons/icon.ico'))
/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = path.join(__dirname, '/static').replace(/\\/g, '\\\\')
  // require('vue-devtools').install()
}

let mainWindow
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`

function createWindow () {
  const size = electron.screen.getPrimaryDisplay().workAreaSize
  const appWidth = parseInt(size.width * 0.7) 
  const appHeight = parseInt(size.height * 0.85)
  mainWindow = new BrowserWindow({
    minHeight: appHeight,
    minWidth: appWidth,
    height: appHeight,
    width: appWidth,
    frame: false,
    icon: systemIcon,
    webPreferences: {
        webSecurity: false
    }
  })
  mainWindow.id = 100 
  mainWindow.loadURL(winURL)

  mainWindow.on('closed', () => {
    mainWindow = null 
  })
  // require("./createMenu")
  require("./communication")(mainWindow)

  if (process.env.NODE_ENV !== 'production') {
    require('vue-devtools').install()
  }
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit() 
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */
