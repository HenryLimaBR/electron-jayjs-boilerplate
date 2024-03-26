import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('electronAPI', {
  getElectronVersionInfo: () => {
    return ipcRenderer.invoke('getElectronVersionInfo')
  },
  getUserInfo: () => {
    return ipcRenderer.invoke('getUserInfo')
  },
})
