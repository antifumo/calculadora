const {app, BrowserWindow,nativeTheme} = require('electron')

const createWindow = () => {
  nativeTheme.themeSource = 'system'
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    autoHideMenuBar:true,
  })
    win.loadFile('src/view/index.html')
}
app.whenReady().then(() => {
    createWindow()
})