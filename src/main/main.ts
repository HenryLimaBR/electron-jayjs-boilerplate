import { app, BrowserWindow, ipcMain, Menu } from 'electron'

let win: BrowserWindow | null = null

function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: import.meta.resolve('./preload.mjs').replace(/file:\/+/, ''),
    },
  })

  win.setMenuBarVisibility(false)

  process.env.VITE_DEV_SERVER_URL
    ? win.loadURL(process.env.VITE_DEV_SERVER_URL)
    : win.loadFile('dist/index.html')

  win.on('closed', () => {
    win = null
  })

  return win
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.whenReady().then(() => {
  const win = createWindow()

  // IPC Events
  ipcMain.handle('getElectronVersionInfo', () => {
    return {
      node: process.versions.node,
      chrome: process.versions.chrome,
      electron: process.versions.electron,
      v8: process.versions.v8,
    }
  })

  ipcMain.handle('getUserInfo', () => {
    return {
      user: {
        domain: process.env.USERDOMAIN,
        name: process.env.USERNAME,
      },
    }
  })

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })

  win.setMenu(
    Menu.buildFromTemplate([
      {
        label: 'File',
        submenu: [
          {
            label: 'Quit',
            click: () => {
              app.quit()
            },
            accelerator: 'CmdOrCtrl+Q',
          },
        ],
      },
    ])
  )
})
