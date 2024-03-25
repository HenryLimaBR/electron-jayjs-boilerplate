import { app, BrowserWindow } from 'electron'

let win: BrowserWindow | null = null

function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  })

  win.removeMenu()
  
  process.env.VITE_DEV_SERVER_URL
    ? win.loadURL(process.env.VITE_DEV_SERVER_URL)
    : win.loadFile('dist/index.html')

  win.on('closed', () => {
    win = null
  })
}

app.whenReady().then(createWindow)
